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
    width: '35%',
    background: '#3d8579',
    borderRadius: '10px !important ',
  },
  
  h1 :{
    fontSize: '40px',
    fontWeight: '200',
    whiteSpace: 'pre',
    display: 'block',
  },
  
  input :{
    width: '250px',
    borderRadius: '3px',
    fontFamily: "Source Sans Pro, sans-serif",
    padding: '10px 15px',
    margin: '0 auto !important ',
    display: 'block !important ',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '300',
    borderColor: "white !important",
    marginBottom: '15px !important ',
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "&::placeholder": {
      color: "white !important"
    },
    "& ::-webkit-input-placeholder": {
      color: "red !important"
    },
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    }

    
  },

  root:{
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
    fontWeight: '300',
  },

  
  button :{
    display: 'block !important ',
    margin: '0 auto !important ',
    appearance: 'none !important ',
    outline: '0 !important ',
    backgroundColor: '#F08A5D !important ',
    border: '0 !important ',
    padding: '10px 15px !important ',
    width: 'auto !important',
    color: 'white !important ',
    borderRadius: '3px !important ',
    fontSize: '18px !important ',
    marginBottom: '15px !important ',
  },
}));

export default useStyles;