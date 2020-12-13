import React, { useContext } from "react";
import withWidth from "@material-ui/core/withWidth";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Box, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from "@material-ui/core";
import { People, Close, ChevronRight, ChevronLeft } from '@material-ui/icons';
import clsx from 'clsx';
import { ThemeContext } from "../../../context/themeContext";

const Panel = ({ width }) => {
  const { currentTheme } = useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const drawerWidth = width === 'xs' ? '100%' : width === 'sm' ? '35%' : '25%';

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
        backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '' ,
        color: currentTheme === 'dark' ? '#7575a3' : '',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
        backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '' ,
        color: currentTheme === 'dark' ? '#7575a3' : '',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    toolbar: {
        
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

  const handleDrawer = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })
    }
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List>
            <ListItem>
            <ListItemIcon><Typography style={{color: currentTheme === 'dark' ? '#7575a3' : '',}} variant="h5">Logo</Typography></ListItemIcon>
            <ListItemText><Typography variant="h5">PlatinumPay</Typography></ListItemText>
            </ListItem>
            <Divider />
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{color: currentTheme === 'dark' ? '#7575a3' : '',}}>{index % 2 === 0 ? <People /> : <Close />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{color: currentTheme === 'dark' ? '#7575a3' : '',}}>{index % 2 === 0 ? <People /> : <Close />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem>
              <ListItemIcon>
              <div className={classes.toolbar}>
          <IconButton onClick={handleDrawer} style={{color: currentTheme === 'dark' ? '#7575a3' : '',}}>
            {!open ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
              </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default withWidth()(Panel);