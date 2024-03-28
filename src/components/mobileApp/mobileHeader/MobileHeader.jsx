import styles from "./MobileHeader.module.css";
import localIcon from "../../../assets/icons/Vector.png";
import arrowIcon from "../../../assets/icons/Frame (2).png";
import Ellipse from "../../../assets/icons/Ellipse 33 (1).png"
import Input from "../../headSection/Input";

const MobileHeader = ({
  currentWeatherData,
  onSearch,
  updateSearch,
  value,
  handleArrowClick,
  showInput,
  errorInputMessage,
}) => {
  return (
    <div className={styles.headerContainer}>
      <ul className={styles.cityContainer}>
        <li>
          <img src={localIcon} alt="localIcon" />
        </li>
        <li>{currentWeatherData?.name}</li>
        <li>
          <img src={arrowIcon} alt="arrowIcon" className={styles.arrowIcon} onClick={handleArrowClick} />
        </li>
        {showInput && (
                <Input
                  onSearch={onSearch}
                  value={value}
                  updateSearch={updateSearch}
                />
              )}
              {errorInputMessage && <div className="error-message">{errorInputMessage}</div>}
      </ul>
      <img src={Ellipse} alt="menuIcon" />
    </div>
  );
};

export default MobileHeader;
