import axios from "axios";

export default{
    getHikeLogsByUser(userId){
        return axios.get(`/outdoorlogger/hikinglog/user/${userId}`);
    },
    getHikeLogById(logId){
        return axios.get(`/outdoorlogger/hikinglog/${logId}`);
    },
    createHikeLog(hikeLog){
        return axios.post('/outdoorlogger/hikinglog/create', hikeLog);
    },
}