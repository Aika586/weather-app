import MobileHeader from "./mobileHeader/MobileHeader";
import MobileWeatherInfo from "./weathetInfo/MobileWeatherInfo";
import CarouselForecast from "../mainSection/rightSidebar/carouselWeather/CarouselForecast";
import Chart from "../../assets/images/Frame 6 (2).png";
import styles from "./MobileApp.module.css";

const MobileApp = ({
  currentWeatherData,
  currentCityTime,
  onSearch,
  updateSearch,
  value,
  handleArrowClick,
  showInput,
  errorInputMessage,
  currentCity,
}) => {
  return (
    currentWeatherData && (
      <div>
        <MobileHeader
          currentWeatherData={currentWeatherData}
          onSearch={onSearch}
          updateSearch={updateSearch}
          value={value}
          handleArrowClick={handleArrowClick}
          showInput={showInput}
          errorInputMessage={errorInputMessage}
        />
        <MobileWeatherInfo
          currentWeatherData={currentWeatherData}
          currentCityTime={currentCityTime}
        />
        <div className={styles.wrapperContainer}>
          <CarouselForecast currentCity={currentCity} />
          <img src={Chart} alt="chartOfWeather" />
        </div>
      </div>
    )
  );
};

export default MobileApp;
