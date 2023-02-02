import React, { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Button, Select, TextField,MenuItem } from '@mui/material';
import axios from 'axios';
function App(){

  const url = 'http://127.0.0.1:5000/'

  const [result , setresult] = useState('')
  const [value, setvalue] = useState('')
  const getText = (e) =>{
    setvalue(e.target.value)
  }

  const translate = ()=>{
    getText()
    axios.post(url+'input',{"input":value}).then((res) => {
      console.log(res)
    })
    axios.get(url).then((res) =>{
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
        <TextField multiline label='input here' onChange={getText} id='fullWidth'></TextField>
        <Button onClick={translate} variant='contained' id='button'>translate</Button>
        <TextField multiline id='fullWidth' disabled value={result}></TextField>
      </header>
    </div>
  );
}

export default App;
