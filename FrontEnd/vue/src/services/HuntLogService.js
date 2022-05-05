import axios from "axios";

export default{
    getHuntLogsByUser(userId){
        return axios.get(`/outdoorlogger/huntinglog/user/${userId}`);
    },
    getHuntLogById(logId){
        return axios.get(`/outdoorlogger/huntinglog/${logId}`);
    },
    createHuntLog(huntLog){
        return axios.post('/outdoorlogger/huntinglog/create', huntLog);
    },
    deleteHuntLog(logId){
        return axios.delete(`/outdoorlogger/huntinglog/${logId}`);
    },
    editHuntLog(huntLog){
        return axios.put(`/outdoorlogger/huntinglog/update/${huntLog.huntLogId}`, huntLog)
    }
}