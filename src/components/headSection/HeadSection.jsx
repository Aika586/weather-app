import styles from "./HeadSection.module.css";
import localIcon from "../../assets/icons/Vector.png";
import arrowIcon from "../../assets/icons/Frame (1).png";
import { weatherIcons } from "../../constants/weatherIcons";
import Input from "./Input";
import Temperature from "../Temperature/Temperature";

const HeadSection = ({
  currentWeatherData,
  currentCityTime,
  onSearch,
  updateSearch,
  value,
  handleArrowClick,
  showInput,
  errorInputMessage,
}) => {
  return (
    currentWeatherData && (
      <div className={styles.headWrapper}>
        <div className={styles.weatherInfo}>
          <div className={styles.right_content}>
            <div className={styles.cityContainer}>
              <img src={localIcon} alt="localIcon" />
              <span className={styles.cityName}>
                {currentWeatherData?.name}
              </span>
              <img
                src={arrowIcon}
                alt="arrowIcon"
                className={styles.arrowIcon}
                onClick={handleArrowClick}
              />
              {showInput && (
                <Input
                  onSearch={onSearch}
                  value={value}
                  updateSearch={updateSearch}
                />
              )}
              {errorInputMessage && (
                <div className="error-message">{errorInputMessage}</div>
              )}
            </div>
            <p className={styles.weather_description}>
              {currentWeatherData.weather[0].main}
            </p>
            <Temperature
              currentCityTime={currentCityTime}
              currentWeatherData={currentWeatherData}
            />
          </div>
          <div className={styles.weather_icon_container}>
            <img
              src={weatherIcons[currentWeatherData.weather[0].main]}
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
