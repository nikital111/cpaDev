import React, { useEffect, useState, useContext } from "react";
import { makeStyles, withWidth } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import "./smile.scss";
import { ThemeContext } from "../../context/themeContext";
import { theme } from "../../state/consts";

const useStyles = makeStyles((theme) => ({
  smileObj: {
    fontSize: "50px",
    position: "absolute",
    maxHeight: "100%",
  },
  phrase: {
    textAlign: "center",
    fontFamily: "RobotoBold",
    textTransform: "uppercase",
    padding: 5,
  },
}));

export const Smile = ({ phrase, duration, id, width, number, sound }) => {
  const classes = useStyles();
  const [audioFlag, setAudioFlag] = useState(true);
  const [inProp, setInProp] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const { currentTheme } = useContext(ThemeContext);

  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  useEffect(() => setClientWidth(window.innerWidth));
  useEffect(() => {
    document
      .querySelectorAll(`.smile${duration}`)
      .forEach((el) => el.style.setProperty("--duration", duration + "s"));
  }, []);
  useEffect(() => {
    setInterval(() => {
      if (!showMessage) {
        setShowMessage(true);
      }
      if (!audioFlag) {
        setAudioFlag(true);
      }
      if (inProp) {
        setInProp(false);
      }
    }, duration * 1000 - 100);
  }, []);

  const smileHandler = (e) => {
    if (e.target.childNodes[0] === "") {
      e.target.style.zIndex = -1;
    }
    setInProp(true);
    if (audioFlag && sound) {
      sound.play();
      setAudioFlag(false);
    }
  };

  return (
    <div
      onClick={smileHandler}
      duration={duration}
      className={classes.smileObj + " " + `smile webkit smile${duration}`}
      style={{
        marginLeft: (clientWidth * 0.85) * `0.${number}` + "px",
        width: width === "xs" ? 100 : 130,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      id={id}
    >
      <CSSTransition
        timeout={300}
        appear={true}
        classNames="alert"
        in={inProp}
        onEntered={() => setShowMessage(false)}
      >
        <p
          className={classes.phrase}
          style={{
            color: currentTheme === "light" ? theme.dark : theme.light,
            width: "100%",
            zIndex: 99,
            fontSize:
              width === "xs"
                ? 14
                : width === "sm"
                ? 16
                : width === "md"
                ? 17
                : 18,
          }}
        >
          {console.log('asdsad')}
          {showMessage ? phrase : ""}
        </p>
      </CSSTransition>
    </div>
  );
};

export default withWidth()(Smile);
