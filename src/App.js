import React, { useEffect } from 'react';
import './App.css';
import { AppBar, Button, TextField } from '@mui/material';
function App(){
  return (
    <div className="App">
      <AppBar position='static' id='AppBar'>LINGUIST</AppBar>
      <header className="App-header">
        <TextField multiline label='input here' id='fullWidth'></TextField>
        <Button variant='contained' id='button'>translate</Button>
        <TextField multiline id='fullWidth'> translated </TextField>
      </header>
    </div>
  );
}

export default App;
