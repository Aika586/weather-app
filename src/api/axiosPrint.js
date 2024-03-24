import axios from "axios";

const axiosPrint = axios.create({
  baseURL:"https://api.openweathermap.org/data/2.5/"
});

export default axiosPrint;