import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/min4303/dummy-dbs",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProject(id) {
    return apiClient.get(`/projects/${id}`);
  },
  getTechByProjId(id) {
    return apiClient.get(`/technologies/${id}/technologies`);
  },
  getProjNum() {
    return apiClient.get("/projects/");
  },
};
