import axios from "axios";

// [#1] HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

// [#2] API 통신 부 정의
function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`)
}

// [#3] 함수로 정의한 API 통신 부를 components에서 import 할 수 있도록 export
export{
    fetchNewsList,
    fetchJobsList,
    fetchAskList
}