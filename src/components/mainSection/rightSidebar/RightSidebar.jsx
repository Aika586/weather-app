import CarouselForecast from "./carouselWeather/CarouselForecast";
import AirCondition from "./airCondition/AirCondion";
import styles from "./RightSidebar.module.css";
import mountain from "../../../assets/images/Vector 8.png";

const RigthSideBar = ({ currentCity, currentCityTime, currentWeatherData }) => {
  return (
    <div className={styles.sidebar_container}>
      <CarouselForecast
        currentCity={currentCity}
        currentCityTime={currentCityTime}
        isDesktop
      />
      <div className={styles.absolute}>
        <AirCondition currentWeatherData={currentWeatherData} />
      </div>
      <img src={mountain} alt="mountain" className={styles.mountain} />
    </div>
  );
};

export default RigthSideBar;
