import useSWR from "swr"
import { getWeatherData } from "../../../api/getWeatherData"


const RigthSideBar=({currentCity})=>{
  const {data}= useSWR(["forecast", currentCity],([key,currentCity])=>getWeatherData(key,currentCity))
  console.log(data)

  return(
<>
helo
</>
  )
}

export default RigthSideBar