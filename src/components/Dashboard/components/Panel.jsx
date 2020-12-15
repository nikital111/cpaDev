import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import withWidth from "@material-ui/core/withWidth";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Box, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Icon, Hidden, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { People, Close, ChevronRight, ChevronLeft } from '@material-ui/icons';
import clsx from 'clsx';
import { ThemeContext } from "../../../context/themeContext";
import MenuIcon from "@material-ui/icons/Menu";
import { setOpenPanel } from "../../../actions/actions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Panel = ({ width }) => {
    const { currentTheme } = useContext(ThemeContext);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();
    const drawerWidth = '280px';

    const useStyles = makeStyles((theme) => ({
        hide: {
            display: 'none',
        },
        drawer: {

            flexShrink: 0,

            whiteSpace: 'nowrap',
            '& .MuiDrawer-paper': {
                top: '63px',
                height: 'calc(100vh - 103px)',
                boxShadow: '2px 1px 16px 5px rgba(0,0,0,0.35)',
            },

        },
        drawerOpen: {

            backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '',
            color: currentTheme === 'dark' ? '#7575a3' : '',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            display: width === 'xs' ? 'none' : 'visible',
            backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '',
            color: currentTheme === 'dark' ? '#7575a3' : '',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: '80px'
        },
        buttClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: '80px'
        },
        buttOpen: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            width: drawerWidth
        },
        root: {
            '& .MuiAccordionDetails-root':{
                padding:'0px 0px 10px 0px'
            },
            '& .MuiAccordionSummary-root.Mui-expanded': {
                minHeight: 'none',
                backgroundColor: '#232135'
            },
            '& .MuiAccordion-root.Mui-expanded': {
                margin: '0px'
            },
            '& .MuiAccordionSummary-expandIcon': {
                color: 'rgb(117, 117, 163)'
            },
            '& .MuiCollapse-container': {
                backgroundColor: '#232135'
            },
            '& .MuiAccordion-root:before': {
                display: 'none'
            },
            '& .MuiPaper-root': {
                backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : 'white',
                color: 'rgb(117, 117, 163)',
                textAlign: 'center',
                '&:hover':{
                    backgroundColor: currentTheme === 'dark' ? '#232135' : 'white',
                    color:'#4b7cf3'
                }


            }
        },
        liAcc:{
            width:'100%',
            cursor:'pointer',
            padding:'10px 0px 10px 30px',
            margin:'5px 0px',
            color:'rgb(117, 117, 163)',
            textAlign:'left',
            '&:hover':{
                color:'#4b7cf3'
            }
        },
        ulAcc:{
            width:'100%',
            listStyleType:'none',
            padding:'0px'
        }
    }));

    const handleDrawer = () => {
        setOpen(!open);
        dispatch(setOpenPanel())
    };

    const classes = useStyles();

    return (
        <>


            <Hidden smUp>
                <IconButton
                    onClick={handleDrawer}
                    style={{
                        backgroundColor: '#001529',
                        position: 'fixed',
                        top: '10vh',
                        left: '10px',
                        zIndex: '999',
                        color: 'red'
                    }}>
                    <MenuIcon style={{
                        color: '#aeaee0'
                    }}></MenuIcon>
                </IconButton>
            </Hidden>



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

                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<><ExpandMoreIcon /><ExpandMoreIcon /></>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Apps</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                    <ul className={classes.ulAcc}>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                    </ul>
                                
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Extra apps</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                    <ul className={classes.ulAcc}>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                    </ul>
                                
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Ecommerce</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                    <ul className={classes.ulAcc}>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                    </ul>
                                
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Auth Pages</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                    <ul className={classes.ulAcc}>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                    </ul>
                                
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Widgets</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                    <ul className={classes.ulAcc}>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                    </ul>
                                
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Cards</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                    <ul className={classes.ulAcc}>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                    </ul>
                                
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Tables</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                    <ul className={classes.ulAcc}>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                    </ul>
                                
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>Charts</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                    <ul className={classes.ulAcc}>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                        <li className={classes.liAcc}>Profile</li>
                                    </ul>
                                
                            </AccordionDetails>
                        </Accordion>

                    </div>

                    <ListItem
                        className={clsx(classes.drawer, {
                            [classes.buttOpen]: open,
                            [classes.buttClose]: !open,
                        })
                        }
                        classes={{
                            paper: clsx({
                                [classes.buttOpen]: open,
                                [classes.buttClose]: !open,
                            }),
                        }}
                        onClick={handleDrawer}
                        style={{
                            justifyContent: 'center',
                            backgroundColor: currentTheme === 'dark' ? '#14142d' : 'white',
                            cursor: 'pointer',
                            position: 'fixed',
                            bottom: '0px',
                            height: '40px',
                        }}>
                        <ListItemIcon style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <div className={classes.toolbar}>
                                <Icon style={{
                                    color: currentTheme === 'dark' ? '#7575a3' : '',
                                    width: '100%'
                                }}>
                                    {!open ? <ChevronRight /> : <ChevronLeft />}
                                </Icon>
                            </div>
                        </ListItemIcon>
                    </ListItem>
                </List>

            </Drawer>

        </>
    );
};

export default withWidth()(Panel);