import axios from 'axios';

export default{
    getFishLogsByUser(userId){
        return axios.get(`/outdoorlogger/fishinglog/user/${userId}`);
    },
    getFishLogById(logId){
        return axios.get(`/outdoorlogger/fishinglog/${logId}`);
    },
    createFishLog(fishLog){
        return axios.post('/outdoorlogger/fishinglog/create', fishLog);
    },
}