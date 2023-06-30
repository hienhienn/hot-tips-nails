import axios from "axios";

const request = axios.create({
  baseURL: 'https://my-json-server.typicode.com/hienhienn',
  timeout: 3000
});

export default request;