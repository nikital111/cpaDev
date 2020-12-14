import React, { useContext } from "react";
import withWidth from "@material-ui/core/withWidth";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Box, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Icon } from "@material-ui/core";
import { People, Close, ChevronRight, ChevronLeft } from '@material-ui/icons';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import clsx from 'clsx';
import { ThemeContext } from "../../../context/themeContext";
import { Area, AreaChart, CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Cards = ({ width }) => {
    const { currentTheme } = useContext(ThemeContext);

    const useStyles = makeStyles((theme) => ({
        cards: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: currentTheme === 'dark' ? '#aeaee0' : 'black',
            position: 'relative',
            padding: '25px',
            backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '',
            width: width === 'lg' ? '24vw' : width === 'xl' ? '25vw' : width === 'md' ? '91vw' : width === 'sm' ? '91vw' : '91vw',
            border: currentTheme === 'dark' ? '1px solid #232135' : 'none',
            margin: '10px',
        }
    }));


    const classes = useStyles();

    return (
        <>
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100vw'
            }}>

                <Typography variant="h5" style={{
                    color: currentTheme === 'dark' ? '#aeaee0' : 'black',
                    width: '100vw',
                    paddingBottom: '20px',
                    marginLeft: '10px'
                }}>
                    Ваши карточки
              </Typography>

                <Box style={{
                    maxWidth: width === 'xs' ? '90vw' : width === 'sm' ? '80vw' : width === 'md' ? '86vw' : width === 'lg' ? '90vw' : '90vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}>

                    <Box
                        className={classes.cards}
                    >

                        <Typography variant='h6' style={{
                            position: 'absolute',
                            top: '13px',
                            right: '-15px',
                            backgroundColor: '#41b883',
                            color: '#fff',
                            padding: '0px 5px',
                            borderRadius: '4px'
                        }}>
                            $560,245.35
                        </Typography>

                        <Icon style={{
                            width: 'auto',
                            height: 'auto',
                            marginBottom: '15px'
                        }}>
                            <StarBorderIcon style={{
                                fontSize: '70px',
                                color: currentTheme === 'light' ? '#595c97' : ''
                            }}></StarBorderIcon>
                        </Icon>

                        <Typography variant='h4' style={{ marginBottom: '5px' }}>David Beckham</Typography>
                        <Typography variant='h6' style={{ marginBottom: '15px',color: currentTheme === 'light' ? '#595c97' : '' }}>8748-XXXX-1678-5416</Typography>
                        <Typography variant='h6' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>MASTERCARD</Typography>
                        <Divider style={{
                            backgroundColor: currentTheme === 'dark' ? '#232135' : 'white',
                            margin: '20px 0px',
                            width: '100%'
                        }} />
                        <Typography variant='h6' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>Expires at 03/22</Typography>
                    </Box>


                    <Box
                        className={classes.cards}
                    >

                        <Typography variant='h6' style={{
                            position: 'absolute',
                            top: '13px',
                            right: '-15px',
                            backgroundColor: '#41b883',
                            color: '#fff',
                            padding: '0px 5px',
                            borderRadius: '4px'
                        }}>
                            $560,245.35
                        </Typography>

                        <Icon style={{
                            width: 'auto',
                            height: 'auto',
                            marginBottom: '15px'
                        }}>
                            <StarBorderIcon style={{
                                fontSize: '70px',
                                color: currentTheme === 'light' ? '#595c97' : ''
                            }}></StarBorderIcon>
                        </Icon>

                        <Typography variant='h4' style={{ marginBottom: '5px' }}>David Beckham</Typography>
                        <Typography variant='h6' style={{ marginBottom: '15px',color: currentTheme === 'light' ? '#595c97' : '' }}>8748-XXXX-1678-5416</Typography>
                        <Typography variant='h6' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>MASTERCARD</Typography>
                        <Divider style={{
                            backgroundColor: currentTheme === 'dark' ? '#232135' : 'white',
                            margin: '20px 0px',
                            width: '100%'
                        }} />
                        <Typography variant='h6' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>Expires at 03/22</Typography>
                    </Box>



                    <Box
                        className={classes.cards}
                    >

                        <Typography variant='h6' style={{
                            position: 'absolute',
                            top: '13px',
                            right: '-15px',
                            backgroundColor: '#41b883',
                            color: '#fff',
                            padding: '0px 5px',
                            borderRadius: '4px'
                        }}>
                            $560,245.35
                        </Typography>

                        <Icon style={{
                            width: 'auto',
                            height: 'auto',
                            marginBottom: '15px'
                        }}>
                            <StarBorderIcon style={{
                                fontSize: '70px',
                                color: currentTheme === 'light' ? '#595c97' : ''
                            }}></StarBorderIcon>
                        </Icon>

                        <Typography variant='h4' style={{ marginBottom: '5px' }}>David Beckham</Typography>
                        <Typography variant='h6' style={{ marginBottom: '15px',color: currentTheme === 'light' ? '#595c97' : '' }}>8748-XXXX-1678-5416</Typography>
                        <Typography variant='h6' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>MASTERCARD</Typography>
                        <Divider style={{
                            backgroundColor: currentTheme === 'dark' ? '#232135' : 'white',
                            margin: '20px 0px',
                            width: '100%'
                        }} />
                        <Typography variant='h6' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>Expires at 03/22</Typography>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default withWidth()(Cards);