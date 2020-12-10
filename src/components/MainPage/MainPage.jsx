import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Container, makeStyles, Box, Typography } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import { theme } from "../../state/consts";
import { amber } from "@material-ui/core/colors";
import { ThemeContext } from "../../context/themeContext";
import { v4 as uuidv4 } from "uuid";
import "./mainPage.scss";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: `calc(100vh - ${theme.spacing(10)}px)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gsBtn: {
    padding: "15px",
    backgroundColor: amber[700],
    "&:hover": {
      backgroundColor: amber[800],
    },
    fontFamily: "RobotoBold",
  },
}));

const MainPage = ({ themeChanger, width }) => {
  console.log(width);
  const classes = useStyles();

  const { currentTheme } = useContext(ThemeContext);

  const color = currentTheme === "light" ? theme.dark : theme.light;
  const renderStars = () => {
    const stars = [
      { top: "calc(36% - 18px)", left: "calc(23% - 11px)", delay: 10 + "s" },
      { top: "calc(13% - 2px)", left: "calc(70% - 35px)", delay: 20 + "s" },
      { top: "calc(65% - 27px)", left: "calc(77% - 38px)", delay: 30 + "s" },
      { top: "calc(45% - 12px)", left: "calc(63% - 31px)", delay: 40 + "s" },
      { top: "calc(83% - 41px)", left: "calc(59% - 29px)", delay: 50 + "s" },
      { top: "calc(96% - 43px)", left: "calc(98% - 49px)", delay: 60 + "s" },
      { top: "calc(53% - 26px)", left: "calc(68% - 34px)", delay: 70 + "s" },
      { top: "calc(12% - 3px)", left: "calc(10% - 5px)", delay: 80 + "s" },
      { top: "calc(70% - 35px)", left: "calc(12% - 6px)", delay: 90 + "s" },
      { top: "calc(26% - 13px)", left: "calc(37% - 18px)", delay: 100 + "s" },
    ];
    const items = stars.map((star) => {
      return (
        <svg
          key={uuidv4()}
          className="star"
          style={{
            willChange: "transform",
            position: "absolute",
            userSelect: "none",
            pointerEvents: "none",
            width: 50,
            height: 50,
            top: star.top,
            left: star.left,
            zIndex: 95,
            animationDelay: star.delay,
          }}
          viewBox="0 0 68 68"
        >
          <path
            fill="#FFC700"
            d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
          ></path>
        </svg>
      );
    });
    return items;
  };
  const starsJSX = renderStars();

  return (
    <>
      <Container fixed className={classes.mainContainer}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          {starsJSX}
        </div>
        <Box style={{ color, marginBottom: "40px" }}>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            style={{ fontFamily: "RobotoBold", fontSize: width === "xs" && 65 }}
          >
            Speakeasy
          </Typography>
          <Typography
            variant="h5"
            align="center"
            style={{
              fontFamily: "RobotoRegular",
              fontSize: width === "xs" && 16,
            }}
          >
            Easely speaking with your friends
          </Typography>
        </Box>
        <Box>
          <NavLink
          style={{
            textDecoration: "none",
          }}
          to='register' exact>
          <Button variant="contained" color="primary" className={classes.gsBtn}>
            Getting started
          </Button>
          </NavLink>
        </Box>
      </Container>
    </>
  );
};

export default withWidth()(MainPage);
