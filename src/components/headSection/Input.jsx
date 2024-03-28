import styles from "./HeadSection.module.css";

const Input = ({ onSearch, value, updateSearch }) => {
  const handleSearch = () => {
    onSearch();
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter City Name.."
        value={value}
        onChange={updateSearch}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default Input;
