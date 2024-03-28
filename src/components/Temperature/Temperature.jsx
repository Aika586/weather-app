
import styles from "./Temperature.module.css"
const Temperature = ({isMobile,currentCityTime,currentWeatherData}) => {
  return currentWeatherData && currentCityTime &&(
     <div className={isMobile ? styles.mobile : styles.weather}>
      <p className={styles.temp}>
        {" "}
        {Math.round(currentWeatherData?.main.temp)}&deg;C
      </p>
      <p>{currentCityTime?.format("dddd | D MMM YYYY")}</p>

    </div>
    
  );
};

export default Temperature;
