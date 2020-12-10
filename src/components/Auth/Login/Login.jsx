import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import { Container, TextField, makeStyles, Box, Typography, Paper, FormControl,Icon,Hidden, IconButton, StepIcon } from "@material-ui/core";
import { Visibility,VisibilityOff, People } from '@material-ui/icons';
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../context/themeContext";

  const Login = ({width}) => {
    console.log(width)
  const [mess, setMess] = useState('');
  const [vis, setVis] = useState(false);
  const { currentTheme } = useContext(ThemeContext);

  const auth = async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const pass = document.querySelector('#pass').value;
    const data = {
      "username": name,
      "password": pass
    };
    console.log(data)
    await fetch('https://secure.platinumpay.cc/dashboard/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json()
      })
      .then(userData => {
        console.log(userData)
        if (userData.result) {
          document.cookie = `token=${userData.response.access_token}; path=/;max-age=360000`;
          document.cookie = `level=${userData.response.level}; path=/;max-age=360000`;
          setMess('Авторизация прошла успешно!')
        }
        else {
          setMess('Что-то пошло не так, попробуйте еще раз.')
        }
      })
  }

  return (
    <>
      <Box style={{
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0xp',
        bottom: '0px',
        width: '100%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Paper 
        className='animate__animated animate__fadeInDown'
        style={{
          zIndex: '99999',
          padding: '40px 30px',
          display: "flex",
          justifyContent:'center',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '8px',
          maxWidth:'80%',
          minHeight:'350px',
          position:'relative',
          border: currentTheme === 'dark' ? null : '1px black solid',
          marginTop: width === 'xs' ? '40%' : '0px'
        }}>
          <NavLink
          to="/"
          exact
              style={{
                color:'red',
                border:'0px',
                cursor:'pointer',
                fontSize:'20px',
                fontWeight:'bold',
                position:'absolute',
                top:'-20px',
                right:'36px',
                textDecoration:'none',
                zIndex:'99999'
              }}
          >
            X
          </NavLink>
          <Box style={{
            position:'absolute',
            top:'-35px',
            left:'7%',
            right:'7%',
            width:'86%',
            height:'120px',
            backgroundColor: currentTheme === 'light' ? '#ffc602' : '#3f51b5',
            borderRadius:'4px',
            display:'flex',
            justifyContent: 'center',
            alignItems:'center',
            color: "white"
          }}>
          <Typography variant="h5">
            Авторизация
          </Typography>
          </Box>
          {/* <Typography variant="h4" style={{
            marginBottom: '15px',
            color: currentTheme === 'light' ? 'white' : '',
          }}>
            Авторизация
          </Typography> */}
          <Box style={{
            position:'relative'
          }}>
            <TextField
              id="name"
              placeholder="Укажите ваш логин"
              label='Логин'
              required
              style={{ margin: '60px 0px 15px 0px', width: '264px', backgroundColor: 'white' }}
            />
            <Icon style={{
              position:'absolute',
              right:"10px",
              top:'75px'
            }}
            >
              <People></People>
            </Icon>
          </Box>
          <Box style={{
            position:'relative'
          }}>
            <TextField
              id="pass"
              placeholder="Введите ваш пароль"
              label='Пароль'
              required
              style={{ margin: '15px 0px', width: '264px', backgroundColor: 'white' }}
              type={!vis ? 'password' : ''}
            />
            {!vis ? 
            <IconButton style={{
              position:'absolute',
              right:"2px",
              top:'20px'
            }}
            onClick={()=>{setVis(!vis)}}
            >
              <Visibility></Visibility>
            </IconButton>
            :
            <IconButton style={{
              position:'absolute',
              right:"2px",
              top:'20px'
            }}
            onClick={()=>{setVis(!vis)}}
            >
              <VisibilityOff></VisibilityOff>
            </IconButton>
            }
          </Box>
          <Button type='submit'
         // variant="outlined"
            //color="#9c27b0"
            style={{
              marginTop: '20px',
              borderRadius: '11px',
              fontSize: '15px',
              height: '45px',
              color:"rgb(63, 81, 181)"
            }}
            onClick={auth}
          >
            Войти
            </Button>
            {/* <button style={{
              color:'rgb(63, 81, 181)',
              border:'0px',
              margin:'15px 0px ',
              cursor:'pointer',
              fontSize:'15px'
            }}>
              Уже есть аккаунт?
            </button> */}
            <NavLink
              to="/register"
              exact
              style={{
                color:'rgb(63, 81, 181)',
                border:'0px',
                margin:'15px 0px ',
                cursor:'pointer',
                fontSize:'15px',
              }}
            >
              Зарегистрироваться
            </NavLink>

          {mess ?
            <Typography
              variant='h6'
              style={{
                marginTop: '20px',
                color: currentTheme === 'dark' ? 'black' : 'white',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
            >{mess}</Typography>
            : null
          }
        </Paper>
      </Box>
    </>
  );
};

export default withWidth()(Login);