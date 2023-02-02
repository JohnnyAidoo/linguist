import React, { useEffect } from 'react';
import './App.css';
import { AppBar, Button, Select, TextField,MenuItem } from '@mui/material';
function App(){
  
  
  return (
    
    <div className="App">
      <AppBar position='static' id='AppBar'>LINGUIST</AppBar>
      <header className="App-header">
        <div>
          <Select>
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'fr'}>French</MenuItem>
            <MenuItem value={'es'}>Spanish</MenuItem>
          </Select>
          <br/>
          <Select>
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'fr'}>French</MenuItem>
            <MenuItem value={'es'}>Spanish</MenuItem>
          </Select>
        </div>
        <TextField multiline label='input here' id='fullWidth'></TextField>
        <Button variant='contained' id='button'>translate</Button>
        <TextField multiline id='fullWidth'> translated </TextField>
      </header>
    </div>
  );
}

export default App;
