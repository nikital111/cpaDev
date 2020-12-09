import React, { useContext, useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { makeStyles } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import { ThemeContext } from "../../../../context/themeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 48,
    width: 48,
    borderRadius: theme.spacing(1),
    fontSize: "32px",
    borderWidth: "2px",
    borderColor: "#1a202c",
    borderStyle: "solid",
  },
}));

export const ThemeChanger = ({ themeChanger }) => {
  const classes = useStyles();

  const { currentTheme } = useContext(ThemeContext);

  const [icon, setIcon] = useState(
    currentTheme === "dark" ? "Brightness2Icon" : "Brightness7Icon"
  );

  const [stylesForIcon, setStylesForIcon] = useState({
    backgroundColor: "#1a202c",
    "&:hover": {
      backgroundColor: "#354159",
    },
    color: "#EFEFF0",
  });

  useEffect(() => {
    if (currentTheme === "light") {
      setStylesForIcon((prev) => ({
        ...prev,
        backgroundColor: "#fff",
        "&:hover": { backgroundColor: "#CED7EB" },
        color: amber[600],
      }));
    } else {
      setStylesForIcon((prev) => ({
        ...prev,
        backgroundColor: "#1a202c",
        "&:hover": { backgroundColor: "#354159" },
        color: "#EFEFF0",
      }));
    }
  }, [currentTheme]);

  const themeHandler = () => {
    setIcon(currentTheme === "light" ? "Brightness2Icon" : "Brightness7Icon");
    themeChanger();
  };

  return (
    <IconButton
      className={classes.root}
      style={{ ...stylesForIcon }}
      onClick={themeHandler}
    >
      {icon === "Brightness7Icon" ? <Brightness7Icon /> : <Brightness2Icon />}
    </IconButton>
  );
};
