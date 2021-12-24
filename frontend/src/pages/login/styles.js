import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  body :{
    fontFamily: "Source Sans Pro, sans-serif",
    color: 'white',
    fontWeight: '300',
    background: '#146356',
    width: '100%',
    height: '100%',
  },
  
  container :{
    margin: '10% auto',
    padding: '80px 0',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#3d8579',
    width: '50%',
    background: '#3d8579',
  },
  
  h1 :{
    fontSize: '40px',
    fontWeight: '200',
  },
  
  input :{
    border: '1px solid rgba(252, 252, 252, 0.4)',
    width: '250px',
    borderRadius: '3px',
    fontFamily: "Source Sans Pro, sans-serif",
    padding: '10px 15px',
    margin: '0 auto 10px auto',
    display: 'block',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '300',
    borderColor: "white",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "white !important",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white !important",
      },
    },
    "&::placeholder": {
      color: "white !important"
    },
    "& ::-webkit-input-placeholder": {
      color: "red !important"
    }

    
  },

  root:{
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    fontWeight: '300',
  },

  
  button :{
    appearance: 'none !important ',
    outline: '0 !important ',
    backgroundColor: '#F08A5D !important ',
    border: '0 !important ',
    padding: '10px 15px !important ',
    color: 'white !important ',
    borderRadius: '3px !important ',
    width: '250px !important ',
    fontSize: '18px !important ',
  },
}));

export default useStyles;