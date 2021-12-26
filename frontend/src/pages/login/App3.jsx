import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import useStyles from './styles.js';
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth-service";


function App3() {
  const styles = useStyles();
  
  const navigate = useNavigate();


  const [fullName, setFullName] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFullName(prevValue => {
      if (name === "email") {
        return {
          email: value,
          password: prevValue.password
        };
      } else if (name === "password") {
        return {
          email: prevValue.email,
          password: value
        };
      }
    });
  }
  
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await AuthService.login(fullName.email, fullName.password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>
            Entrar
        </h1>
        <form className={styles.form}> 
        
        <TextField 
                className={styles.input}
                label="Email" 
                name="email"
                onChange={handleChange}
                value={fullName.email}
            />
            <TextField 
                className={styles.input}
                label="Senha" 
                name="password"
                onChange={handleChange}
                value={fullName.password}
            />
            <Button onClick={handleLogin} className={styles.button}>Entrar</Button>
      </form>
    </div>
  );
}

export default App3;
