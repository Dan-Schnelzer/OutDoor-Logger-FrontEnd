import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import FishLogService from '../services/FishLogService.js'

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
    }
  }
})
