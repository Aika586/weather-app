import styles from "./AirCondition.module.css";
import tempIcon from "../../../../assets/icons/ICON (3).png";
import windIcon from "../../../../assets/icons/Frame.png";
import rainIcon from "../../../../assets/icons/Layer 2.png";
import UVIcon from "../../../../assets/icons/weatherIcons/113@2x.png";

function Conditions({ title, value, icon, isUV }) {
  return (
    <ul className={styles.condition}>
      <li>
        <img src={icon} alt="icon" className={isUV ? styles.icon : " "} />
      </li>
      <li>
        <p className={styles.title}>{title}</p>{" "}
        <p className={styles.value}>{value}</p>
      </li>
    </ul>
  );
}

const AirCondition = ({ currentWeatherData, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    currentWeatherData && (
      <div className={styles.airCondition_wrapper}>
        <p>AIR CONDITIONS</p>
        <div className={styles.airCondition_container}>
          <Conditions
            value={`${Math.round(currentWeatherData.main.temp)}°C`}
            title="Real Feel"
            icon={tempIcon}
          />
          <Conditions
            value={`${currentWeatherData.wind.speed} km/hr`}
            title="Wind"
            icon={windIcon}
          />
          <Conditions
            value={`${currentWeatherData.main.humidity}%`}
            title="Chance of rain"
            icon={rainIcon}
          />
          <Conditions
            value="is not providing by API"
            title="UV Index"
            icon={UVIcon}
            isUV
          />
        </div>
      </div>
    )
  );
};

export default AirCondition;
