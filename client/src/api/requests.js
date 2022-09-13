import axios from 'axios';
// production
const API_URL = 'v1/jobs/';

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
const getJobs = async () => {
  const { data } = await httpGetJobs();
  console.log(data);
};
getJobs();
