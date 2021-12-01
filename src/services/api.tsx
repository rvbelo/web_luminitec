import axios from "axios";

const api = axios.create({
  baseURL:"https://acv-ms-people-management.azurewebsites.net/Authentication/"
})

export default api;