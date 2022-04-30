import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import FishLogService from '../services/FishLogService.js'
import HuntLogService from '../services/HuntLogService.js'
import HikingLogService from '../services/HikingLogService.js'
import ScoutReportService from '../services/ScoutReportService.js'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    fishLogs: [],
    fishLog: {},
    huntLogs: [],
    huntLog: {},
    scoutLogs: [],
    scoutLog: {},
    hikeLogs: [],
    hikeLog: {},
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    SET_FISH_LOGS(state, fishLogs){
      state.fishLogs = fishLogs;
    },
    SET_FISH_LOG(state, fishLog){
      state.fishLog = fishLog;
    },
    ADD_FISH_LOG(state, fishLog){
      state.fishLogs.push(fishLog);
      // whether we need .push or .add, we will see as we code this out
    },


    SET_HUNT_LOG(state, huntLog){
      state.huntLog = huntLog;
    },
    SET_HUNT_LOGS(state, huntLogs){
      state.huntLogs = huntLogs;
    },
    ADD_HUNT_LOG(state, huntLog){
      state.huntLogs.push(huntLog);
    },


    SET_HIKE_LOG (state, hikeLog){
      state.hikeLog = hikeLog;
    },
    SET_HIKE_LOGS(state, hikeLogs){
      state.hikeLogs = hikeLogs;
    },
    ADD_HIKE_LOG(state, hikeLog){
      state.hikeLogs.push(hikeLog);
    },


    SET_SCOUT_LOG(state, scoutLog){
      state.scoutLog = scoutLog;
    },
    SET_SCOUT_LOGS(state, scoutLogs){
      state.scoutLogs = scoutLogs;
    },
    ADD_SCOUT_LOG(state, scoutLog){
      state.scoutLogs.push(scoutLog);
    },

  },
  actions: {
    LOAD_FISH_LOG(context, logId){
      FishLogService.getFishLogById(logId).then( (Response) =>
      {
        const fishLog = Response.data;
        context.commit('SET_FISH_LOG', fishLog);
      });
    },
    LOAD_ALL_FISH_LOGS(context,userId){
      FishLogService.getFishLogsByUser(userId).then ( (Response) =>
      {
        const fishLogs = Response.data;
        context.commit('SET_FISH_LOGS', fishLogs );
      });
    },
    CREATE_NEW_FISH_LOG(context, fishLog){
      FishLogService.createFishLog(fishLog).then( (Response) => 
      {
        if (Response.status == 200){
          const newFishLog = Response.data;
          context.commit('ADD_FISH_LOG', newFishLog);
        }
      });
    },

    LOAD_HUNT_LOG(context, logId){
      HuntLogService.getHuntLogById(logId).then( (Response) =>
      {
        const huntLog = Response.data;
        context.commit('SET_HUNT_LOG', huntLog);
      });
    },
    LOAD_ALL_HUNT_LOGS(context, userId){
      HuntLogService.getHuntLogsByUser(userId).then ( (Response) =>
      {
        const huntLogs = Response.data;
        context.commit('SET_HUNT_LOGS', huntLogs);
      });
    },
    CREATE_NEW_HUNT_LOG(context, huntLog) {
      HuntLogService.createHuntLog(huntLog).then( (Response) => 
      {
        if (Response.status == 200){
          const newHuntLog = Response.data;
          context.commit('ADD_HUNT_LOG', newHuntLog);
        }
      });
    },


    LOAD_HIKE_LOG(context, logId){
      HikingLogService.getHikeLogById(logId).then( (Response) =>
      {
        const hikeLog = Response.data;
        context.commit('SET_HIKE_LOG' , hikeLog);
      });
    },
    LOAD_ALL_HIKE_LOGS(context, userId) {
      HikingLogService.getHikeLogsByUser(userId).then ( (Response) =>
      {
        const hikeLogs = Response.data;
        context.commit('SET_HIKE_LOGS', hikeLogs);
      });
    },
    CREATE_NEW_HIKE_LOG(context, hikeLog){
      HikingLogService.createHikeLog(hikeLog).then( (Response) =>
      {
        if (Response.status == 200){
          const newHikeLog = Response.data;
          context.commit('ADD_HIKE_LOG', newHikeLog);
        }
      });
    },


    LOAD_SCOUT_LOG(context, logId){
      ScoutReportService.getScoutReportById(logId).then ( (Response) =>
      {
        const scoutLog = Response.data;
        context.commit('SET_SCOUT_LOG', scoutLog);
      });
    },
    LOAD_ALL_SCOUT_LOGS(context, userId) {
      ScoutReportService.getScoutReportsByUser(userId).then ( (Response) =>
      {
        const scoutLogs = Response.data;
        context.commit('SET_SCOUT_LOGS', scoutLogs);
      });
    },
    CREATE_NEW_SCOUT_LOG(context, scoutLog) {
      ScoutReportService.createScoutLog(scoutLog).then( (Response) => 
      {
        if (Response.status == 200){
          const newScoutLog = Response.data;
          context.commit('ADD_SCOUT_LOG', newScoutLog);
        }
      });
    },
    

  }
})
