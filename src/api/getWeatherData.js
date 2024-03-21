import axios from "axios";

export const getWeatherData = async () => {
  const APIKEY = import.meta.env.VITE_API_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Bishkek,kg&APPID=${APIKEY}`
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
};
