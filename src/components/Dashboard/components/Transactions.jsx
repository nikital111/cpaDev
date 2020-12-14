import React, { useContext } from "react";
import withWidth from "@material-ui/core/withWidth";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Box, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Icon } from "@material-ui/core";
import { People, Close, ChevronRight, ChevronLeft } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import clsx from 'clsx';
import { ThemeContext } from "../../../context/themeContext";
import { Area, AreaChart, CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Accounts = ({ width }) => {
    const { currentTheme } = useContext(ThemeContext);

    const useStyles = makeStyles((theme) => ({
        tran: {
            display:'flex',
            flexWrap:'wrap',
            flexDirection:'column',
            justifyContent:'center',
            color: currentTheme === 'dark' ? '#aeaee0' : 'black',
            backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '',
            width: '96vw',
            border: currentTheme === 'dark' ? '1px solid #232135' : 'none',
            borderRadius:'8px',
            borderLeft:'5px #41b883 solid',
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
                    Последние транзакции
              </Typography>
                <Box style={{
                    maxWidth: width === 'xs' ? '90vw' : width === 'sm' ? '80vw' : width === 'md' ? '86vw' : width === 'lg' ? '90vw' : '90vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}>


                   <Box
                   className={classes.tran}
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
                               flexWrap:'wrap',
                               padding:'20px 20px'
                           }}>
                               <Typography variant='h5' style={{width:'100%'}}>+$10,264</Typography>
                               <Typography variant='h6' style={{width:'100%',color: currentTheme === 'light' ? '#595c97' : ''}}>4512-XXXX-1678-7528</Typography>
                           </Box>
                           <Icon style={{
                            width: 'auto',
                            height: 'auto',
                            display:'flex',
                            alignItems:'center',
                            marginRight:'10px',
                            
                        }}>
                            <ArrowBackIcon style={{
                                border:'4px #41b883 solid',
                                borderRadius:'35px',
                                fontSize: '35px',
                                color:'#41b883'
                            }}></ArrowBackIcon>
                        </Icon>
                       </Box>
                       <Box style={{
                           backgroundColor: currentTheme === 'dark' ? '#232135' : '',
                           alignItems:'center',
                           padding:'20px 10px'
                           }}>
                           <Typography variant='h7' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>To DigitalOcean Cloud Hosting, Winnetka, LA</Typography>
                       </Box>
                   </Box>


                   <Box
                   className={classes.tran}
                   style={{
                    borderLeft:'5px red solid',
                   }}
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
                               flexWrap:'wrap',
                               padding:'20px 20px'
                           }}>
                               <Typography variant='h5' style={{width:'100%'}}>-$1,125</Typography>
                               <Typography variant='h6' style={{width:'100%',color: currentTheme === 'light' ? '#595c97' : ''}}>4512-XXXX-1678-7528</Typography>
                           </Box>
                           <Icon style={{
                            width: 'auto',
                            height: 'auto',
                            display:'flex',
                            alignItems:'center',
                            marginRight:'10px',
                            
                        }}>
                            <ArrowForwardIcon style={{
                                border:'4px red solid',
                                borderRadius:'35px',
                                fontSize: '35px',
                                color:'red'
                            }}></ArrowForwardIcon>
                        </Icon>
                       </Box>
                       <Box style={{
                           backgroundColor: currentTheme === 'dark' ? '#232135' : '',
                           alignItems:'center',
                           padding:'20px 10px'
                           }}>
                           <Typography variant='h7' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>From Tesla Cars, Inc</Typography>
                       </Box>
                   </Box>


                   <Box
                   className={classes.tran}
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
                               flexWrap:'wrap',
                               padding:'20px 20px'
                           }}>
                               <Typography variant='h5' style={{width:'100%'}}>+$10,264</Typography>
                               <Typography variant='h6' style={{width:'100%',color: currentTheme === 'light' ? '#595c97' : ''}}>4512-XXXX-1678-7528</Typography>
                           </Box>
                           <Icon style={{
                            width: 'auto',
                            height: 'auto',
                            display:'flex',
                            alignItems:'center',
                            marginRight:'10px',
                            
                        }}>
                            <ArrowBackIcon style={{
                                border:'4px #41b883 solid',
                                borderRadius:'35px',
                                fontSize: '35px',
                                color:'#41b883'
                            }}></ArrowBackIcon>
                        </Icon>
                       </Box>
                       <Box style={{
                           backgroundColor: currentTheme === 'dark' ? '#232135' : '',
                           alignItems:'center',
                           padding:'20px 10px'
                           }}>
                           <Typography variant='h7' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>To DigitalOcean Cloud Hosting, Winnetka, LA</Typography>
                       </Box>
                   </Box>


                   <Box
                   className={classes.tran}
                   style={{
                    borderLeft:'5px red solid',
                   }}
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
                               flexWrap:'wrap',
                               padding:'20px 20px'
                           }}>
                               <Typography variant='h5' style={{width:'100%'}}>-$1,125</Typography>
                               <Typography variant='h6' style={{width:'100%',color: currentTheme === 'light' ? '#595c97' : ''}}>4512-XXXX-1678-7528</Typography>
                           </Box>
                           <Icon style={{
                            width: 'auto',
                            height: 'auto',
                            display:'flex',
                            alignItems:'center',
                            marginRight:'10px',
                            
                        }}>
                            <ArrowForwardIcon style={{
                                border:'4px red solid',
                                borderRadius:'35px',
                                fontSize: '35px',
                                color:'red'
                            }}></ArrowForwardIcon>
                        </Icon>
                       </Box>
                       <Box style={{
                           backgroundColor: currentTheme === 'dark' ? '#232135' : '',
                           alignItems:'center',
                           padding:'20px 10px'
                           }}>
                           <Typography variant='h7' style={{color: currentTheme === 'light' ? '#595c97' : ''}}>From Tesla Cars, Inc</Typography>
                       </Box>
                   </Box>


                   

                </Box>


            </Box>
        </>
    );
};

export default withWidth()(Accounts);