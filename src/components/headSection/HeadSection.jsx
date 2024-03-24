import useSWR from "swr";
import styles from "./HeadSection.module.css";
import { getWeatherData } from "../../api/getWeatherData.js";
import localIcon from "../../assets/icons/Vector.png";
import arrowIcon from "../../assets/icons/Frame (1).png";
import cloudyImage from "../../assets/images/cloud.png";
import rainyImage from "../../assets/images/389.png";
import { getCurrentDate } from "../../constants/getCurrentDate.js";

const HeadSection = ({ currentCity }) => {
  const { data: currentWeatherData } = useSWR(
    ["weather", currentCity],
    ([key, currentCity]) => getWeatherData(key, currentCity)
  );
  // console.log(currentWeatherData);
  return (
    currentWeatherData && (
      <div className={styles.headWrapper}>
        <div className={styles.weatherInfo}>
          <div className={styles.right_content}>
          <div className={styles.cityContainer}>
            <img src={localIcon} alt="localIcon" className={styles.arrow}/>
            <span className={styles.cityName}>{currentWeatherData.name}</span>
            <img src={arrowIcon} alt="arrowIcion" />
          </div>
          <p className={styles.weather_description}>
            {currentWeatherData.weather[0].main}
          </p>
          <div className={styles.weather}>
            <p> {Math.round(currentWeatherData.main.temp)}&deg;C</p>
            <p>{getCurrentDate(currentWeatherData.dt)}</p>
          </div>
        </div>
        <div className={styles.weather_icon_container}>
          <img
            src={
              currentWeatherData.weather[0].main === "Clouds"
                ? cloudyImage
                : currentWeatherData.weather[0].main === "Rain"
                ? rainyImage
                : ""
            }
            className={styles.weatherIcons}
            alt={currentWeatherData.weather[0].description}
          />
        </div>
        </div>
      </div>
    )
  );
};

export default HeadSection;
