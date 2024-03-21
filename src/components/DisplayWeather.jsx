import { getWeatherData } from "../api/getWeatherData";
import useSWR from "swr";

const DisplayWeatherData=()=>{
  const {data}=useSWR("get_currentData",getWeatherData)
  console.log(data)
  return(
    <>
    weather app
    </>
  )
}

export default DisplayWeatherData