import axios from 'axios';

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCVptl77VWZf7QZu4l8fxz2AkEisUPHQ80",
  },
});

export default request;