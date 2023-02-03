import React, { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Button, Select, StepLabel,TextField,MenuItem } from '@mui/material';
import axios from 'axios';
function App(){

  const url = 'https://linguistback.onrender.com/'

  const [result , setresult] = useState('')
  const [value, setvalue] = useState('')
  const [lang, setlang] = useState('')

  
  
  const translate = ()=>{
    axios.post(url,{"input":value,"lang":lang}).then((res) => {
      setresult(res.data.message)
    })
  }
 
  const getText = (e) =>{
    setvalue(e.target.value)
    }

  const setlanguage =(e) =>{
    setlang(e.target.value);
  }


  return (
    
    <div className="App" onChange={translate}>
      <AppBar position='static' id='AppBar'>LINGUIST</AppBar>
      <header className="App-header">
        <div id="selects">

          <StepLabel>English</StepLabel>
          <br/>
          <Select onChange={setlanguage} label='To' defaultValue='en'>
            <MenuItem  value='en'>English</MenuItem>
            <MenuItem value='fr' >French</MenuItem>
            <MenuItem value='es' >Spanish</MenuItem>
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
