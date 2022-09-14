import axios from "axios";
// production
// const API_URL = '/v1/jobs/';
const API_URL = "http://localhost:8000/jobs/";

async function httpGetJobs() {
  try {
    const { data } = await axios.get(`${API_URL}`);
    return data;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
}
export { httpGetJobs };
