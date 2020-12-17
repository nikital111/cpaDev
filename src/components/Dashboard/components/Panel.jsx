import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import withWidth from "@material-ui/core/withWidth";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Box, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Icon, Hidden, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { People, Close, ChevronRight, ChevronLeft } from '@material-ui/icons';
import HomeIconOutlined from '@material-ui/icons/HomeOutlined';
import AppsIconOutlined from '@material-ui/icons/AppsOutlined';
import StorageIconOutlined from '@material-ui/icons/StorageOutlined';
import ShoppingCartIconOutlined from '@material-ui/icons/ShoppingCartOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
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
    const drawerWidth = width === 'xs' ? '' : '280px';

    const useStyles = makeStyles((theme) => ({
        hide: {
            display: 'none',
        },
        drawer: {

            flexShrink: 0,

            whiteSpace: 'nowrap',
            '& .MuiDrawer-paper': {
                top: '63px',
                bottom: '40px',
                right: width === 'xs' ? '0px' : 'auto',
                boxShadow: '2px 1px 16px 5px rgba(0,0,0,0.35)',
                '&::-webkit-scrollbar': {
                    width: '5px',
                    backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '',

                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: currentTheme === 'dark' ? '#32304b!important' : '#c8c4db',
                }
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
            color: currentTheme === 'dark' ? 'rgb(117, 117, 163)' : '#595c97',
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
        secret:{
            display:'none',
            top:'-10px',
            right:'-50px',
            width:'60px',
            minHeight:'150px',
            zIndex:'9999'
        },
        root: {
            '& .MuiIcon-root': {
                position:'relative',
                width: '80%',
                height: 'auto',
                borderRadius: '10px',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: currentTheme === 'dark' ? '#232135' : '#e4e9f0',
                    color: '#4b7cf3',
                },
            },
            '& .MuiPaper-elevation1': {
                boxShadow: 'none'
            },
            '& .MuiAccordionDetails-root': {
                padding: '0px 0px 10px 0px',
                marginBottom: '5px'
            },
            '& .MuiAccordionSummary-root.Mui-expanded': {
                height: 'none',
                backgroundColor: currentTheme === 'dark' ? '#232135' : '#e4e9f0'
            },
            '& .MuiAccordion-root.Mui-expanded': {
                margin: '0px'
            },
            '& .MuiAccordionSummary-expandIcon': {
                color: currentTheme === 'dark' ? 'rgb(117, 117, 163)' : '#595c97',
            },
            '& .MuiCollapse-container': {
                backgroundColor: currentTheme === 'dark' ? '#232135' : '#e4e9f0'
            },
            '& .MuiAccordion-root:before': {
                display: 'none'
            },
            '& .MuiPaper-root': {
                // height: '30px',
                backgroundColor: 'inherit',
                color: currentTheme === 'dark' ? 'rgb(117, 117, 163)' : '#595c97',
                textAlign: 'center',
                '&:hover': {
                    backgroundColor: currentTheme === 'dark' ? '#232135' : '#e4e9f0',
                    color: '#4b7cf3'
                },


            },

            textAlign: !open ? 'center' : '',
            display: 'flex',
            flexDirection: 'column',
            alignItems: !open ? 'center' : '',
            justifyContent: !open ? 'center' : '',
        },
        liAcc: {
            width: '100%',
            cursor: 'pointer',
            padding: '10px 0px 10px 30px',
            margin: '5px 0px',
            color: 'rgb(117, 117, 163)',
            textAlign: 'left',
            fontSize:'0.95rem',
            '&:hover': {
                color: '#4b7cf3'
            }
        },
        ulAcc: {
            width: '100%',
            listStyleType: 'none',
            padding: '0px'
        },
        icons: {
            margin: '11.6px 0px!important',
            fontSize:'1.13rem'
        },
        heading: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            fontSize:'0.95rem',
            '& svg':{
                fontSize:'1.13rem!important',
            }
        },
        
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
                        top: '15vh',
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
                        {open ?
                            <Typography variant='h7' style={{
                                color: currentTheme === 'dark' ? '#232135' : '#c8c4db',
                                margin: '5px 0px 5px 15px'

                            }}>Номе</Typography>
                            :
                            <Divider style={{
                                width: '70%',
                                backgroundColor: currentTheme === 'dark' ? '#232135' : '#c8c4db',
                                margin: '10px 0px'
                            }}>

                            </Divider>
                        }
                        {open ?
                            <>
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={open ? <><ExpandMoreIcon /><People /></> : ''}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    // onClick={open ? null : handleDrawer}
                                    >
                                        <Typography className={classes.heading}>Home <div><ExpandMoreIcon /><HomeIconOutlined /></div> </Typography>
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
                            </>
                            :
                            <Icon className='iconSec'>
                                <HomeIconOutlined
                                    className={classes.icons}
                                    style={{
                                        height: '30px',
                                        margin: '5px 0px'
                                    }}></HomeIconOutlined>
                                {/* <div 
                                className={`${classes.secret} blocSec`}
                                style={{
                                    position:'absolute'
                                }}>
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div> */}
                            </Icon>
                        }

                        {open ?
                            <Typography variant='h7'
                                style={{
                                    color: currentTheme === 'dark' ? '#232135' : '#c8c4db',
                                    margin: '5px 0px 5px 15px'

                                }}>APPS n PAGES</Typography>
                            :
                            <Divider style={{
                                width: '70%',
                                backgroundColor: currentTheme === 'dark' ? '#232135' : '#c8c4db',
                                margin: '10px 0px'
                            }}>

                            </Divider>
                        }

                        {open ?
                            <>
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={open ? <><ExpandMoreIcon /><ExpandMoreIcon /></> : ''}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    // onClick={open ? null : handleDrawer}
                                    >
                                        <Typography className={classes.heading}>Apps <div><ExpandMoreIcon /><AppsIconOutlined /></div></Typography>
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

                            </>
                            :
                            <Icon>
                                <AppsIconOutlined
                                    className={classes.icons}
                                    style={{
                                        height: '30px',
                                        margin: '5px 0px'
                                    }}></AppsIconOutlined >
                            </Icon>
                        }
                        {open ?
                            <>
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={open ? <><ExpandMoreIcon /><ExpandMoreIcon /></> : ''}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    // onClick={open ? null : handleDrawer}
                                    >
                                        <Typography className={classes.heading}>Extra apps <div><ExpandMoreIcon /><StorageIconOutlined /></div></Typography>
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

                            </>
                            :
                            <Icon>
                                <StorageIconOutlined
                                    className={classes.icons}
                                    style={{
                                        height: '30px',
                                        margin: '5px 0px'
                                    }}></StorageIconOutlined >
                            </Icon>
                        }
                        {open ?
                            <>
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={open ? <><ExpandMoreIcon /><ExpandMoreIcon /></> : ''}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    // onClick={open ? null : handleDrawer}
                                    >
                                        <Typography className={classes.heading}>Ecommerce <div><ExpandMoreIcon /><ShoppingCartIconOutlined /></div></Typography>
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

                            </>
                            :
                            <Icon>
                                <ShoppingCartIconOutlined
                                    className={classes.icons}
                                    style={{
                                        height: '30px',
                                        margin: '5px 0px'
                                    }}></ShoppingCartIconOutlined >
                            </Icon>
                        }
                        {open ?
                            <>
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={open ? <><ExpandMoreIcon /><ExpandMoreIcon /></> : ''}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    // onClick={open ? null : handleDrawer}
                                    >
                                        <Typography className={classes.heading}>Gallery <div><ExpandMoreIcon /><PhotoOutlinedIcon /></div></Typography>
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

                            </>
                            :
                            <Icon>
                                <PhotoOutlinedIcon
                                    className={classes.icons}
                                    style={{
                                        height: '30px',
                                        margin: '5px 0px'
                                    }}></PhotoOutlinedIcon >
                            </Icon>
                        }
                        {open ?
                            <Typography variant='h7' style={{
                                color: currentTheme === 'dark' ? '#232135' : '#c8c4db',
                                margin: '5px 0px 5px 15px'

                            }}>COMPONENTS</Typography>
                            :
                            <Divider style={{
                                width: '70%',
                                backgroundColor: currentTheme === 'dark' ? '#232135' : '#c8c4db',
                                margin: '10px 0px'
                            }}>

                            </Divider>
                        }
                        {open ?
                            <>
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={open ? <><ExpandMoreIcon /><ExpandMoreIcon /></> : ''}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    // onClick={open ? null : handleDrawer}
                                    >
                                        <Typography className={classes.heading}>Cards <div><ExpandMoreIcon /><CreditCardOutlinedIcon /></div></Typography>
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

                            </>
                            :
                            <Icon>
                                <CreditCardOutlinedIcon
                                    className={classes.icons}
                                    style={{
                                        height: '30px',
                                        margin: '5px 0px'
                                    }}></CreditCardOutlinedIcon >
                            </Icon>
                        }
                        {open ?
                            <>
                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={open ? <><ExpandMoreIcon /><ExpandMoreIcon /></> : ''}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    // onClick={open ? null : handleDrawer}
                                    >
                                        <Typography className={classes.heading}>Charts <div><ExpandMoreIcon /><PieChartOutlinedIcon /></div></Typography>
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

                            </>
                            :
                            <Icon>
                                <PieChartOutlinedIcon ple
                                    className={classes.icons}
                                    style={{
                                        height: '30px',
                                        margin: '5px 0px'
                                    }}></PieChartOutlinedIcon >
                            </Icon>
                        }



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