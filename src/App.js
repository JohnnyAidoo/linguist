import React, { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Button, Select, TextField,MenuItem } from '@mui/material';
import axios from 'axios';
function App(){

  const [result , setresult] = useState('')

  const translate = ()=>{
  axios.get('http://127.0.0.1:5000/').then((res) =>{
    setresult(res.data.message);
  })
  }

  return (
    
    <div className="App">
      <AppBar position='static' id='AppBar'>LINGUIST</AppBar>
      <header className="App-header">
        <div id="selects">

          <Select >
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'fr'}>French</MenuItem>
            <MenuItem value={'es'}>Spanish</MenuItem>
          </Select>
          <br/>
          <Select >
            <MenuItem value={'en'}>English</MenuItem>
            <MenuItem value={'fr'}>French</MenuItem>
            <MenuItem value={'es'}>Spanish</MenuItem>
          </Select>
        </div>
        <TextField multiline label='input here' id='fullWidth'></TextField>
        <Button onClick={translate} variant='contained' id='button'>translate</Button>
        <TextField multiline id='fullWidth'>{result} </TextField>
      </header>
    </div>
  );
}

export default App;
