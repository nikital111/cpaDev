import React, { useContext } from "react";
import withWidth from "@material-ui/core/withWidth";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Box, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Icon } from "@material-ui/core";
import { People, Close, ChevronRight, ChevronLeft } from '@material-ui/icons';
import DnsIcon from '@material-ui/icons/Dns';
import clsx from 'clsx';
import { ThemeContext } from "../../../context/themeContext";
import { Area, AreaChart, CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Accounts = ({ width }) => {
    const { currentTheme } = useContext(ThemeContext);

    const useStyles = makeStyles((theme) => ({
        acc: {
            display:'flex',
            flexWrap:'wrap',
            flexDirection:'column',
            justifyContent:'center',
            color: currentTheme === 'dark' ? '#aeaee0' : 'black',
            position: 'relative',
            padding: '25px',
            backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '',
            width: width === 'lg' ? '39vw' : width === 'xl' ? '41vw' : width === 'md' ? '91vw' : width === 'sm' ? '91vw' : '91vw',
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
                width: '100vw',
                marginTop: '25px'
            }}>
                <Typography variant="h5" style={{
                    color: currentTheme === 'dark' ? '#aeaee0' : 'black',
                    width: '100vw',
                    paddingBottom: '20px',
                    marginLeft:'10px'
                }}>
                    Ваши аккаунты
              </Typography>
                <Box style={{
                    maxWidth: width === 'xs' ? '90vw' : width === 'sm' ? '80vw' : width === 'md' ? '86vw' : width === 'lg' ? '90vw' : '90vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}>


                   <Box 
                   className={classes.acc}
                   >
                       <Box style={{
                           display:'flex',
                           justifyContent:'space-between',
                           width:'100%'
                       }}>
                           <Box style={{
                               display:'flex',
                               flexDirection:'column',
                               justifyContent:'center',
                               alignItems:'center',
                               flexWrap:'wrap'
                           }}>
                               <Typography variant='h5' style={{width:'100%'}}>US 4658-1657-1235</Typography>
                               <Typography variant='h6' style={{width:'100%',color: currentTheme === 'light' ? '#595c97' : ''}}>$2,156.78</Typography>
                           </Box>
                           <Icon style={{
                            width: 'auto',
                            height: 'auto',
                           
                        }}>
                            <DnsIcon style={{
                                color: currentTheme === 'light' ? '#595c97' : '',
                                fontSize: '50px'
                            }}></DnsIcon>
                        </Icon>
                       </Box>

                       <Divider style={{
                            backgroundColor: currentTheme === 'dark' ? '#232135' : 'white',
                            margin: '20px 0px',
                            width: '100%'
                        }} />

                       <Typography variant='h7' style={{color: currentTheme === 'light' ? '#595c97' : '',textAlign:'center'}}>
                       Current month charged: 12,136.78
                       </Typography>
                   </Box>

                   <Box 
                   className={classes.acc}
                   >
                       <Box style={{
                           display:'flex',
                           justifyContent:'space-between',
                           width:'100%'
                       }}>
                           <Box style={{
                               display:'flex',
                               flexDirection:'column',
                               justifyContent:'center',
                               alignItems:'center',
                               flexWrap:'wrap'
                           }}>
                               <Typography variant='h5' style={{width:'100%'}}>US 4658-1657-1235</Typography>
                               <Typography variant='h6' style={{width:'100%',color: currentTheme === 'light' ? '#595c97' : ''}}>$2,156.78</Typography>
                           </Box>
                           <Icon style={{
                            width: 'auto',
                            height: 'auto',
                           
                        }}>
                            <DnsIcon style={{
                                color: currentTheme === 'light' ? '#595c97' : '',
                                fontSize: '50px'
                            }}></DnsIcon>
                        </Icon>
                       </Box>

                       <Divider style={{
                            backgroundColor: currentTheme === 'dark' ? '#232135' : 'white',
                            margin: '20px 0px',
                            width: '100%'
                        }} />

                       <Typography variant='h7' style={{color: currentTheme === 'light' ? '#595c97' : '',textAlign:'center'}}>
                       Current month charged: 12,136.78
                       </Typography>
                   </Box>


                   <Box 
                   className={classes.acc}
                   >
                       <Box style={{
                           display:'flex',
                           justifyContent:'space-between',
                           width:'100%'
                       }}>
                           <Box style={{
                               display:'flex',
                               flexDirection:'column',
                               justifyContent:'center',
                               alignItems:'center',
                               flexWrap:'wrap'
                           }}>
                               <Typography variant='h5' style={{width:'100%'}}>US 4658-1657-1235</Typography>
                               <Typography variant='h6' style={{width:'100%',color: currentTheme === 'light' ? '#595c97' : ''}}>$2,156.78</Typography>
                           </Box>
                           <Icon style={{
                            width: 'auto',
                            height: 'auto',
                           
                        }}>
                            <DnsIcon style={{
                                color: currentTheme === 'light' ? '#595c97' : '',
                                fontSize: '50px'
                            }}></DnsIcon>
                        </Icon>
                       </Box>

                       <Divider style={{
                            backgroundColor: currentTheme === 'dark' ? '#232135' : 'white',
                            margin: '20px 0px',
                            width: '100%'
                        }} />

                       <Typography variant='h7' style={{color: currentTheme === 'light' ? '#595c97' : '',textAlign:'center'}}>
                       Current month charged: 12,136.78
                       </Typography>
                   </Box>


                   <Box 
                   className={classes.acc}
                   >
                       <Box style={{
                           display:'flex',
                           justifyContent:'space-between',
                           width:'100%'
                       }}>
                           <Box style={{
                               display:'flex',
                               flexDirection:'column',
                               justifyContent:'center',
                               alignItems:'center',
                               flexWrap:'wrap'
                           }}>
                               <Typography variant='h5' style={{width:'100%'}}>US 4658-1657-1235</Typography>
                               <Typography variant='h6' style={{width:'100%',color: currentTheme === 'light' ? '#595c97' : ''}}>$2,156.78</Typography>
                           </Box>
                           <Icon style={{
                            width: 'auto',
                            height: 'auto',
                           
                        }}>
                            <DnsIcon style={{
                                color: currentTheme === 'light' ? '#595c97' : '',
                                fontSize: '50px'
                            }}></DnsIcon>
                        </Icon>
                       </Box>

                       <Divider style={{
                            backgroundColor: currentTheme === 'dark' ? '#232135' : 'white',
                            margin: '20px 0px',
                            width: '100%'
                        }} />

                       <Typography variant='h7' style={{color: currentTheme === 'light' ? '#595c97' : '',textAlign:'center'}}>
                       Current month charged: 12,136.78
                       </Typography>
                   </Box>

                </Box>


            </Box>
        </>
    );
};

export default withWidth()(Accounts);