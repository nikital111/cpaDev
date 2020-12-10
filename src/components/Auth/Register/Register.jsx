import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import { Container, TextField, makeStyles, Box, Typography, Paper, IconButton, FormControl, Icon, withStyles, createStyles, Backdrop } from "@material-ui/core";
import { Visibility, VisibilityOff, People, Close } from '@material-ui/icons';
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../context/themeContext";

const CssTextField = withStyles({
  root: {
    '& .MuiFormHelperText-root':{
      backgroundColor:'rgb(12, 12, 27)'
    },
    '& .MuiInputBase-input': {
      color: '#7575a3',
      height:'36px',
      backgroundColor:'#0c0c1b'
    },
    '& .MuiInput-underline:after': {
      display:'hidden'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#7575a3',
      },
      '&:hover fieldset': {
        borderColor: '#7575a3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7575a3',
      },
    },
  },
})(TextField);

const CssTextField2 = withStyles({
  root: {
    '& .MuiInputBase-input': {
      height:'36px'
    }
  },
})(TextField);

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      color: '#7575a3',
      paddingLeft: '4px'
    },
    icon: {
      'MuiSvgIcon-root': {
        color: '#7575a3'
      }
    }
  })
);

const Register = ({ width }) => {
  const { currentTheme } = useContext(ThemeContext);
  const [mess, setMess] = useState('');
  const [vis, setVis] = useState(false);
  const [err, setErr] = useState({
    name: '',
    pass: ''

  });

  const checkErrorName = (e) => {
    setErr({ ...err, name: '' })
    let value = e.target.value;

    const beginWithoutDigit = /^\D.*$/
    const withoutSpecialChars = /^[^-() /]*$/
    const containsLetters = /^.*[a-zA-Z]+.*$/
    const minimum8Chars = /^.{8,}$/

    if (beginWithoutDigit.test(value) &&
      withoutSpecialChars.test(value) &&
      containsLetters.test(value) &&
      minimum8Chars.test(value)) {
      setErr({ ...err, name: '' })
    } else {
      setErr({ ...err, name: 'Вы некорректно ввели пароль!' })
    }

  }

  const checkErrorPass = (e) => {
    setErr({ ...err, pass: '' })
    let value = e.target.value;

    const beginWithoutDigit = /^\D.*$/
    const withoutSpecialChars = /^[^-() /]*$/
    const containsLetters = /^.*[a-zA-Z]+.*$/
    const minimum8Chars = /^.{8,}$/

    if (beginWithoutDigit.test(value) &&
      withoutSpecialChars.test(value) &&
      containsLetters.test(value) &&
      minimum8Chars.test(value)
    ) {
      setErr({ ...err, pass: '' })
    } else {
      setErr({ ...err, pass: 'Вы некорректно ввели пароль!' })
    }
  }



  const registration = async (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const pass = document.querySelector('#pass').value;
    const data = {
      "username": name,
      "password": pass
    };
    console.log(data)
    await fetch('https://secure.platinumpay.cc/dashboard/register', {
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
          setMess('Вы успешно зарегистрировались!')
        }
        else {
          setMess('Что-то пошло не так, попробуйте еще раз.')
        }
      })
  }

  const classes = useStyles();

  return (
    <>
      <Box
        className='animate__animated animate__fadeInDown'
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0xp',
          bottom: '0px',
          width: '100%',
          height: '100%',
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: currentTheme === 'light' ? 'white' : '#0c0c1b',
          zIndex: '999'
        }}>
        {/* <Typography variant='h4' style={{
          marginBottom:'40px',
          marginTop: width === 'xs' ? '40%' : '0px',
          color: currentTheme === 'dark' ? '#aeaee0' : ''
        }}>
          Добро пожаловать
        </Typography> */}
        <Paper
          style={{
            zIndex: '99999',
            padding: '40px 20px',
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: '8px',
            maxWidth: width === 'xs' ? '80%' : width === "sm" ? '60%' : width === "md" ? '40%' : '25%',
            minHeight: '350px',
            position: 'relative',
            marginTop: '110px',
            marginBottom: '40px',
            backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : '',
            boxShadow: 'none'
          }}>
          <Box style={{
            width:'100%',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <Typography variant="h5" style={{
            width: '100%',
            color: currentTheme === 'dark' ? '#7575a3' : ''
          }}>
            Регистрация
          </Typography>
          <NavLink
            to="/"
            exact
            style={{
              color: 'red!important',
              border: '0px',
              cursor: 'pointer',
              fontSize: '20px',
              fontWeight: 'bold',
              textDecoration: 'none',
              zIndex: '99999'
            }}
          >
            <IconButton >
              <Close style={{
                color: '#3f51b5'
              }}></Close>
            </IconButton>
          </NavLink>

          
          </Box>
          <Box style={{
            position: 'relative',
            width: '100%'
          }}>
            {currentTheme === 'dark' ?
              <CssTextField
                InputProps={{ className: classes.root }}
                id="name"
                placeholder="Укажите ваш логин"
                onChange={checkErrorName}
                required
                error={Boolean(err.name)}
                helperText={err.name}
                style={{
                  margin: '60px 0px 15px 0px',
                  width: '264px',
                  backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : 'white',
                  width: '100%'
                }}
              />
              :
              <CssTextField2
                InputProps={{ className: classes.root }}
                id="name"
                placeholder="Укажите ваш логин"
                onChange={checkErrorName}
                required
                error={Boolean(err.name)}
                helperText={err.name}
                style={{
                  margin: '60px 0px 15px 0px',
                  width: '264px',
                  backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : 'white',
                  width: '100%'
                }}
              />}
            <Icon style={{
              position: 'absolute',
              right: "10px",
              top: '72px',
              color: currentTheme === 'dark' ? '#aeaee0!important' : '',
            }}
            >
              <People
                style={{
                  color: currentTheme === 'dark' ? '#aeaee0' : ''
                }}></People>
            </Icon>
          </Box>
          <Box style={{
            position: 'relative',
            width: '100%'
          }}>
            {currentTheme === 'dark' ?
              <CssTextField
                InputProps={{ className: classes.root }}
                id="pass"
                placeholder="Введите ваш пароль"
                onChange={checkErrorPass}
                required
                error={Boolean(err.pass)}
                helperText={err.pass}
                style={{
                  margin: '15px 0px',
                  width: '264px',
                  backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : 'white',
                  color: currentTheme === 'dark' ? '#aeaee0' : '',
                  width: '100%'
                }}
                type={!vis ? 'password' : ''}
              />
              :
              <CssTextField2
                InputProps={{ className: classes.root }}
                id="pass"
                placeholder="Введите ваш пароль"
                onChange={checkErrorPass}
                required
                error={Boolean(err.pass)}
                helperText={err.pass}
                style={{
                  margin: '15px 0px',
                  width: '264px',
                  backgroundColor: currentTheme === 'dark' ? '#0c0c1b' : 'white',
                  color: currentTheme === 'dark' ? '#aeaee0' : '',
                  width: '100%'
                }}
                type={!vis ? 'password' : ''}
              />}
            {!vis ?
              <IconButton style={{
                position: 'absolute',
                right: "-2px",
                top: '17px',
              }}
                onClick={() => { setVis(!vis) }}
              >
                <Visibility style={{
                  color: currentTheme === 'dark' ? '#aeaee0' : ''
                }}></Visibility>
              </IconButton>
              :
              <IconButton style={{
                position: 'absolute',
                right: "-2px",
                top: '17px'
              }}
                onClick={() => { setVis(!vis) }}
              >
                <VisibilityOff style={{
                  color: currentTheme === 'dark' ? '#aeaee0' : ''
                }}></VisibilityOff>
              </IconButton>
            }
          </Box>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            style={{
              marginTop: '20px',
              borderRadius: '2px',
              fontSize: '15px',
              height: '45px',
              width: '100%'
            }}
            onClick={err.pass || err.name ? null : registration}
          >
            Зарегистрироватся
            </Button>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%'
            }}
          >
            <NavLink
              to="/login"
              exact
              style={{
                color: 'rgb(75, 124, 243)',
                border: '0px',
                margin: '15px 0px ',
                cursor: 'pointer',
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              Уже есть аккаунт?
            </NavLink>
          </Box>
        </Paper>

        <Backdrop open={mess} style={{ zIndex: '9999999' }}>
          <Paper
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px',
              borderRadius: '5px'
            }}>
            <Typography variant='h4' align='center'>
              {mess}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginTop: '20px',
                borderRadius: '2px',
                fontSize: '15px',
                height: '45px',
                width: '30%'
              }}
              onClick={() => { setMess('') }}
            >
              Хорошо
            </Button>
          </Paper>
        </Backdrop>

      </Box>
    </>
  );
};
export default withWidth()(Register);