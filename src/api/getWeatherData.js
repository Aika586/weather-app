import axiosPrint from "./axiosPrint";

export const getWeatherData = async (key, currentCity) => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const response = await axiosPrint.get(
    `${key}?q=${currentCity}&APPID=${APIKEY}&units=metric&mode=json`
  );
  return response.data;
};
