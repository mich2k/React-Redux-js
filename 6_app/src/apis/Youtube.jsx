import React from "react";
import axios from 'axios';


const KEY ="AIzaSyACT1w6ysl8iaFLyaXdiM3TT_rgypP9w_k"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});