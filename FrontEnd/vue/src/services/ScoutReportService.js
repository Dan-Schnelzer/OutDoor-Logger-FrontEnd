import axios from "axios";

export default{
    getScoutReportsByUser(userId){
        return axios.get(`/outdoorlogger/scoutingreport/user/${userId}`);
    },
    getScoutReportById(logId){
        return axios.get(`/outdoorlogger/scoutingreport/${logId}`);
    },
    createScoutLog(scoutLog){
        return axios.post('/outdoorlogger/scoutingreport/create', scoutLog);
    },
}