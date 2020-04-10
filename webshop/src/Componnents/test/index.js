import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import Container from '@material-ui/core/Container';




export default function SignIn() {
  const classes = useStyles();

  return (
    <Grid className={classes.background}>>

   
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper} >
        <Grid container spacing={3}>
          <Grid item xs>
            <hr align="left" />
          </Grid>
          <Grid className={classes.title} item xs>
              <Typography className={classes.title_text} >ĐĂNG NHẬP</Typography>
          </Grid>
          <Grid item xs>
            <hr align="right" />
          </Grid>
        </Grid>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Quay về trang chủ
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Quên mật khẩu"}
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
           
            
            className={classes.submit}
          >
            Đăng Nhập
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            fullWidth 
            className={classes.submit1}
          >
          Đăng Kí Tài Khoản Mới
          </Button>
          <hr align="Center" />
          <Grid className={classes.title} item xs>
              <Typography className={classes.title_text} >Hoặc đăng nhập thông qua mạng xã hội</Typography>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Đăng nhập bằng Facebook
          </Button>
          {/* <Button
            variant="contained"
            color="secondary"
            fullWidth
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Đăng nhập bằng Google
          </Button> */}
          <Grid style={{display:'flex',justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          height: 40,
          backgroundColor: '#6d6ddc',
          '&:hover':{
            background:'white',
            color:'black',
          }
    }}>
            <i className="fab fa-facebook-f"  style={{color:'white',fontSize:15}}></i>
            <Typography varian="contained" style={{marginLeft:10,color:'white'}}>
          
            Đăng nhập bằng Facebook
                    
            </Typography>
          </Grid>
          
        </form>
      </div>
    
    </Container>
    </Grid>
  );
}