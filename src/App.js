import React, { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Button, Select, StepLabel,TextField,MenuItem } from '@mui/material';
import axios from 'axios';
function App(){

  const url = 'https://linguistback.onrender.com/'
  //const url = 'http://127.0.0.1:5000/'

  const [result , setresult] = useState('')
  const [value, setvalue] = useState('')
  const [lang1, setlang1] = useState('')
  const [lang2, setlang2] = useState('')

  useEffect(() =>{
    setlang1('en')
    setlang2('en')
  },[])
  
  const translate = ()=>{
    axios.post(url,{"input":value,"fromlang":lang1,"lang":lang2}).then((res) => {
      setresult(res.data.message)
    })
  }
 
  const getText = (e) =>{
    setvalue(e.target.value)
    }

  const setlanguage1 =(e) =>{
    setlang1(e.target.value);
  }
   const setlanguage2 =(e) =>{
    setlang2(e.target.value);
  }
  console.log('h')

  return (
    
    <div className="App" onChange={translate}>
      <AppBar position='static' id='AppBar'>LINGUIST</AppBar>
      <header className="App-header">
        <div id="selects">

        <Select onChange={setlanguage1} label='To' defaultValue='en'>
            <MenuItem  value='en'>English</MenuItem>
            <MenuItem value='fr' >French</MenuItem>
            <MenuItem value='es' >Spanish</MenuItem>
            <MenuItem value='zh-hk'>Chinese</MenuItem>
            <MenuItem value= 'ko' >Korean</MenuItem>
          </Select>
            <br/>
          <Select onChange={setlanguage2} label='To' defaultValue='en'>
            <MenuItem  value='en'>English</MenuItem>
            <MenuItem value='fr' >French</MenuItem>
            <MenuItem value='es' >Spanish</MenuItem>
            <MenuItem value='zh-hk'>Chinese</MenuItem>
            <MenuItem value= 'ko' >Korean</MenuItem>
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
