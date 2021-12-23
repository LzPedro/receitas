import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
    palette: {
      primary: {
        main: "#006400"
      },
      secondary: {
        main: "#f08a5d"
      }
    }
  });

function App() {
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
  function handleSubmit(event) {
    event.preventDefault();
    if(fullName.email==="arroiz" && fullName.password==="123")
        console.log("login")
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="container">
        <h1>
            Entrar
        </h1>
        <form onSubmit={handleSubmit}>
            <TextField 
                label="Email" 
                name="email"
                onChange={handleChange}
                value={fullName.email}
                color="secondary"
            />
            <TextField 
                label="Senha" 
                name="password"
                onChange={handleChange}
                value={fullName.password}
                color="secondary"
            />
            <button>Entrar</button>
      </form>
    </div>
    </ThemeProvider>
  );
}

export default App;
