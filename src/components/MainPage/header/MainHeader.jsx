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
    active:{
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
    loginNav:{
      "&:hover": {
        color:'#9999BB!important',
      },
    },
    loginButton: {
      padding: "8px",
      color:'#7575a3',
      marginRight: "10px",
      fontFamily: "RobotoRegular",
    },
    registerButton: {
      padding: "8px",
      backgroundColor: 'rgb(75, 124, 243)',
      "&:hover": {
        backgroundColor: '#42baf9',
      },
      fontFamily: "RobotoRegular",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
    },
    menu:{
      '& .MuiMenu-paper':{
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
      <AppBar position="fixed" style={{boxShadow:'none',borderBottom: currentTheme === 'dark' ? '1px #232135 solid' : ''}}>
        <Toolbar
          style={{
            minHeight: 63,
            backgroundColor: currentTheme === "light" ? theme.light : "#141322",
            boxShadow:'none'
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
              PlatinumPay
            </NavLink>
          </Typography>
          {width !== "xs" ? (
            <div className={classes.authBlock}>
              <Button
                variant="text"
                className={classes.loginButton}
                disableRipple={true}
                style={{
                  boxShadow:'none'
                }}
              >
                <NavLink
                  className={classes.loginNav}
                  to="/login"
                  exact
                  activeClassName={classes.active}
                  style={{
                    color: currentTheme === 'dark' ? '#7575a3' : 'black',
                  textDecoration: "none" ,
                  minWidth:'110px'
                }}
                >
                  Войти
                </NavLink>
              </Button>
              <Button
                variant="contained"
                className={classes.registerButton}
                color="primary"
                disableRipple={true}
              >
                <NavLink
                  to="/register"
                  activeClassName={classes.active}
                  style={{ color: "white", textDecoration: "none"}}
                >
                  Регистрация
                </NavLink>
              </Button>
            </div>
          ) : (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                style={{ borderRadius: 5, backgroundColor: amber[600], width:'42px',height:'42px',alignItems:'center',padding:'0px' }}
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
                  <Button
                    variant="text"
                    className={classes.loginButton}
                    disableRipple={true}
                    
                  >
                    <NavLink
                    className={classes.loginNav}
                      to="/login"
                      exact
                      activeClassName={classes.active}
                      style={{ 
                        color: currentTheme === 'dark' ? '#7575a3' : 'black',
                      textDecoration: "none",
                      width:'102px'
                    }}
                    >
                      Войти
                    </NavLink>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    variant="contained"
                    className={classes.registerButton}
                    color="primary"
                    disableRipple={true}
                  >
                    <NavLink
                      to="/register"
                      activeClassName={classes.active}
                      style={{ color: "white", textDecoration: "none", }}
                    >
                      Регистрация
                    </NavLink>
                  </Button>
                </MenuItem>
              </Menu>
            </>
          )}

          <ThemeChanger themeChanger={themeChanger} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withWidth()(MainHeader);
