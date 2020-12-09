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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "RobotoBold",
  },
  authBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: amber[900],
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  loginButton: {
    padding: "8px",
    backgroundColor: amber[700],
    "&:hover": {
      backgroundColor: amber[800],
    },
    marginRight: "10px",
    fontFamily: "RobotoRegular",
  },
  registerButton: {
    padding: "8px",
    backgroundColor: amber[700],
    "&:hover": {
      backgroundColor: amber[800],
    },
    fontFamily: "RobotoRegular",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
}));
const MainHeader = ({ themeChanger, width }) => {
  const classes = useStyles();

  const { currentTheme } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar
          style={{
            minHeight: 85,
            backgroundColor: currentTheme === "light" ? theme.light : "#3F51B5",
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
              Speakeasy
            </NavLink>
          </Typography>
          {width !== "xs" ? (
            <div className={classes.authBlock}>
              <Button
                variant="contained"
                color="primary"
                className={classes.loginButton}
                disableRipple={true}
              >
                <NavLink
                  to="/login"
                  exact
                  activeClassName="selectedLink"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Login
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
                  activeClassName="selectedLink"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Register
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
                style={{ borderRadius: 5, backgroundColor: amber[600] }}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.loginButton}
                    disableRipple={true}
                  >
                    <NavLink
                      to="/login"
                      exact
                      activeClassName="selectedLink"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Login
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
                      activeClassName="selectedLink"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Register
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
