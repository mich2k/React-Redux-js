import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sLA-Qx_7XkFuVS-lB3_OqK2jV7mBm67vdsa7gJPbM80'
      }
});

