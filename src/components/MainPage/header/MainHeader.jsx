import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeChanger } from "./ThemeChanger/ThemeChanger";
import { amber } from "@material-ui/core/colors";
import { ThemeContext } from "../../../context/themeContext";
import { NavLink } from "react-router-dom";
import { withWidth } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { theme } from "../../../state/consts";

const MainHeader = ({ themeChanger, width }) => {


  const { currentTheme } = useContext(ThemeContext);


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    active: {
      //color:'#E5A800!important' 
    },
    menuButton: {
      marginRight: theme.spacing(2),
      // '& .MuiTouchRipple-root':{
      //   display:'none'
      // }
    },
    title: {
      flexGrow: 1,
      fontFamily: "RobotoBold",
    },
    authBlock: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: amber[900],
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    loginNav: {
      padding: "8px",
      color: currentTheme === 'dark' ? 'white' : 'black',
      marginRight: "10px",
      fontFamily: "RobotoRegular",
      "&:hover": {
        color: '#9999BB!important',
      },
    },
    registerNav: {
      boxShadow:'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
      padding: "10px 8px",
      borderRadius: '3px',
      backgroundColor: 'rgb(75, 124, 243)',
      "&:hover": {
        backgroundColor: '#42baf9',
      },
      fontFamily: "RobotoRegular",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: 'center'
    },
    menu: {
      '& .MuiMenu-paper': {
        backgroundColor: currentTheme === 'dark' ? 'rgb(12, 12, 27)' : 'white'
      }
    },
  }));

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={classes.root}
    >
      <AppBar position="fixed" style={{
    boxShadow: "0 1px 6px 0 rgba(32,33,36,.28)",
    transition:"box-shadow 250ms"
    }}>
      <Toolbar
        style={{
          minHeight: 63,
          backgroundColor: currentTheme === "light" ? theme.light : "#141322",
          boxShadow: 'none'
        }}
      >
        <Typography
          variant="h4"
          className={classes.title}
          style={{
            fontSize: width === "xs" && 30,
          }}
        >
          <NavLink
            to="/"
            exact
            style={{
              textDecoration: "none",
              color: currentTheme === "light" ? theme.dark : theme.light,
            }}
          >
            Logo
            </NavLink>
        </Typography>
        {width !== "xs" ? (
          <div className={classes.authBlock}>
            <NavLink
              className={classes.loginNav}
              to="/login"
              exact
              activeClassName={classes.active}
              style={{
                textDecoration: "none",
              }}
            >
              Войти
                </NavLink>
            <NavLink
              to="/register"
              className={classes.registerNav}
              activeClassName={classes.active}
              style={{ color: "white", textDecoration: "none" }}
            >
              Регистрация
                </NavLink>

          </div>
        ) : (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                style={{ borderRadius: 5, backgroundColor: amber[600], width: '42px', height: '42px', alignItems: 'center', padding: '0px' }}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                className={classes.menu}
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}

              >
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                  <NavLink
                    className={classes.loginNav}
                    to="/login"
                    exact
                    activeClassName={classes.active}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Войти
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink
                    className={classes.registerNav}
                    to="/register"
                    activeClassName={classes.active}
                    style={{ color: "white", textDecoration: "none", }}
                  >
                    Регистрация
                    </NavLink>
                </MenuItem>
              </Menu>
            </>
          )}

        <ThemeChanger themeChanger={themeChanger} />
      </Toolbar>
      </AppBar>
    </div >
  );
};

export default withWidth()(MainHeader);
