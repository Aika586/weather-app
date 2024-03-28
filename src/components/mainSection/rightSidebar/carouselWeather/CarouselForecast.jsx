import useSWR from "swr";
import { getWeatherData } from "../../../../api/getWeatherData";
import cloudyIcon from "../../../../assets/icons/weatherIcons/116@2x.png";
import sunnyIcon from "../../../../assets/icons/weatherIcons/113@2x.png";
import rainyIcon from "../../../../assets/icons/weatherIcons/389@2x.png";
import styles from "./CarouselWeather.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrow from "../../../../assets/icons/Frame 4.png";
import nextArrow from "../../../../assets/icons/Frame 5 (12).png";
import clockIcon from "../../../../assets/icons/Clock.png";

function NextArrow({ onClick }) {
  return (
    <div onClick={onClick} className={styles.nextArrow}>
      <img src={nextArrow} alt="nextArrow" />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div onClick={onClick} className={styles.prevArrow}>
      <img src={prevArrow} alt="prevArrow" />
    </div>
  );
}

const CarouselForecast = ({ currentCity, currentCityTime, isDesktop }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 6,
    speed: 500,
    centerPadding: "-30px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const { data } = useSWR(["forecast", currentCity], ([key, currentCity]) =>
    getWeatherData(key, currentCity)
  );

  const forecast = data?.list;

  const groupedData = {};

  forecast?.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    console.log(date);
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(entry);
  });

  const weatherIcons = {
    Clouds: cloudyIcon,
    Rain: rainyIcon,
    Clear: sunnyIcon,
    Snow: rainyIcon,
  };

  const daysData = [];
  for (const date in groupedData) {
    const entries = groupedData[date];
    const dayName = new Date(entries[0].dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
    });
    const weatherCondition = entries[0].weather[0].main;
    const weatherIcon = weatherIcons[weatherCondition];
    daysData.push({ dayName, weatherIcon });
  }

  console.log(daysData);

  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {daysData.map((day, index) => (
          <ul key={index} className={styles.forecast}>
            <li className={styles.flex}>
              <span className={styles.days}>{day.dayName.toUpperCase()}</span>
              <img
                src={day.weatherIcon}
                alt="Weather Icon"
                className={styles.weatherIcon}
              />{" "}
            </li>
          </ul>
        ))}
      </Slider>
      {isDesktop && (
        <p className={styles.time}>
          {" "}
          <img src={clockIcon} alt="clockIcon" className={styles.clockIcon} />
          {currentCityTime?.format(" hh:mm A [GMT]")}
        </p>
      )}
    </div>
  );
};

export default CarouselForecast;
