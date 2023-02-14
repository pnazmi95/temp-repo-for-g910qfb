import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-regular-svg-icons";

const DARK = <FontAwesomeIcon icon={faMoon} />;
const LIGHT = <FontAwesomeIcon icon={faLightbulb} />;
interface IDarkModeToggleProps extends React.PropsWithChildren {}

const DarkModeToggle: React.FunctionComponent<IDarkModeToggleProps> = (
  props
): JSX.Element => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    darkModeHandler();
  }, []);

  const darkModeHandler = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.className = "dark";
      setToggle(false);
    } else {
      document.documentElement.className = "";
    }
  };

  const toggleHandler = () => {
    setToggle(!toggle);
    if (toggle) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    darkModeHandler();
  };
  
  return (
    <div
      className="cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
      onClick={toggleHandler}
    >
      {!toggle ? LIGHT : DARK}
    </div>
  );
};

export default DarkModeToggle;
