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
    deleteFishLog(logId){
        return axios.delete(`/outdoorlogger/fishinglog/${logId}`);
    },
    editFishLog(fishLog){
        return axios.put(`/outdoorlogger/fishinglog/update/${fishLog.fishLogId}`, fishLog)
    }
}