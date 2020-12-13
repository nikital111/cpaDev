import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import { useTheme } from '@material-ui/core/styles';
import { TextField, makeStyles, Box, Typography, Paper, Icon, IconButton, withStyles, createStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from "@material-ui/core";
import { Visibility, VisibilityOff, People, Close, ChevronRight, ChevronLeft } from '@material-ui/icons';
import clsx from 'clsx';
import Snackbar from 'node-snackbar';
import { NavLink, useHistory } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import Cookies from 'js-cookie';
import Panel from "./components/Panel";
import StatisticsToday from "./components/StatisticsToday";
import StatisticsMonthly from './components/StatisticsMonthly';



const Dashboard = ({ width }) => {
  console.log(width)
  const [mess, setMess] = useState('');
  const { currentTheme } = useContext(ThemeContext);
  const myHistory = useHistory();

  if(!Cookies.get('token')){
    myHistory.push('/login')
  }

  const useStyles = makeStyles((theme) => ({

  }));

  const classes = useStyles();

  return (
    <>
      <Panel />
      <Box
        className='animate__animated animate__fadeIn'
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0xp',
          bottom: '0px',
          width: '100%',
          minHeight: '100%',
          padding:'90px 0px 0px 12%',
          paddingLeft: width === 'xs' ? '16%' : '12%',
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: currentTheme === 'light' ? 'white' : 'rgb(20, 19, 34)',
          zIndex: '999',
        }}>
      <StatisticsToday />
      <StatisticsMonthly />
      </Box>
    </>
  );
};

export default withWidth()(Dashboard);