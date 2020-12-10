import { Box, Container } from "@material-ui/core";
import React, { useEffect, useReducer, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import  Register  from "./components/Auth/Register/Register";
import MainHeader from "./components/MainPage/header/MainHeader";
import MainPage from "./components/MainPage/MainPage";
import SmileRain from "./components/SmileRain/SmileRain";
import { ThemeContext } from "./context/themeContext";
import { useLocalStorageTheme } from "./hooks/useLocalStorageTheme";
import { DARK, LIGHT, theme } from "./state/consts";
import { mainReducer } from "./state/mainReducer";

function App({ sound, flag }) {
  const { currentTheme } = useLocalStorageTheme("theme");

  const initialState = {
    theme: currentTheme === "light" ? theme.light : theme.dark,
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);
  document.body.style.backgroundColor = state.theme;

  const themeChanger = () => {
    dispatch({
      type: state.theme === theme.light ? DARK : LIGHT,
    });
    document.body.style.backgroundColor = state.theme;
  };

  return (
    <>
      <ThemeContext.Provider value={{ currentTheme }}>
        <MainHeader themeChanger={themeChanger} />

        <Box pt={8} style={{
          overflow:'hidden',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            height: "100%",
          }}>
          {<SmileRain sound={sound} />}

          <Switch>
            <Route path="/" exact>
              <MainPage themeChanger={themeChanger} />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
          </Switch>
        </Box>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
