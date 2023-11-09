import { useAppCtx } from "./Context";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ThemeColor = () => {
  const { darkTheme, toggleDarkTheme } = useAppCtx();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {darkTheme ? (
          <BsSunFill className={darkTheme && "toggle-icon white-icon"} />
        ) : (
          <BsMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeColor;
