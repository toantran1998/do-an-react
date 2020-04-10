import {makeStyles } from '@material-ui/core';
import anh from '../../utils/images/login-bg.png'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
     
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      
      margin: theme.spacing(3, 0, 2),
      // backgroundColor:'transparent',
      backgroundColor:'#00BFFF',
      overflow:'hiden',
      color:'white',
      backgroundRepeat:'transparent',
      '&:hover':{
        background:'white',
        color:'#21beff',
      }
  
    }, 
    button:{
      margin:10,
    },
    background:{
      backgroundImage:"url("+anh+")",
      height:950,
      
    },
    title:{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        paddingTop: '5px',
        fontSize:'24px',
        color:'#fff',
        fontFamily:'Roboto-Condensed-Bold',
        textTransform:'uppercase',
      
    }
  })); 
export default useStyles