import AddBox from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandIcon from '@mui/icons-material/OpenInFull';
import React, { Fragment, useState, useEffect } from "react";
import { Title,  SidebarHeader, SidebarBody, Sidebar, Content, ContentBody,  StyledTeleprompter as Teleprompter, Button} from './StyledComponents.js';
import ScriptList from "./ScriptList.js";
import NewScript from "./NewScript.js";
const axios = require('axios');


const INITIAL_TEXT = ``

function App() {
  const [selectedScript, setSelectedScript] = useState([' ']);
  const [scripts, setScripts] = useState([]);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [listening, setListening] = React.useState(false);
  const [words, setWords] = React.useState(INITIAL_TEXT.split(' '));
  const [progress, setProgress] = React.useState(0);
  const [addingScript, setAddingScript] = React.useState(false);
  useEffect(()=> {
    axios.get("http://localhost:3001/scripts")
    .then(response => {
      console.log(response.data);
      setScripts(response.data);
    }).catch(error => {
      console.log(error)
    })

  }, []);
  const handleInput = e => {
    setWords(e.target.value.split(' '));
    progress && setProgress(0);
  }

  const handleListening = () => {
    if (listening) {
      setListening(false);
    } else {
      setProgress(0);
      setListening(true);
    }
  }

  const handleReset = () =>
    setProgress(0);

  const handleChange = progress =>
    setProgress(progress);


  return (
    <Fragment>
      <Sidebar active={sidebarToggle}>
        <SidebarHeader active={sidebarToggle}>
          <h3>Scripts</h3>
          <button
            onClick={() => {
              setSidebarToggle(!sidebarToggle);
            }}
          ><ExpandIcon fontSize="large"/>
          </button>
        </SidebarHeader>
        <SidebarBody>
        <ScriptList scripts={scripts} setSelectedScript={setSelectedScript} setWords={setWords}></ScriptList>
        </SidebarBody>
        <div>
        <button style={{margin:"10px"}} onClick={()=>setAddingScript(!addingScript)}><AddBox fontSize="large"/></button>
        <button style={{margin:"10px"}}><DeleteIcon fontSize="large"/></button>
        </div>
      </Sidebar>
      <Content >
        {addingScript?  <ContentBody active={sidebarToggle}><NewScript setAddingScript={setAddingScript}/></ContentBody> :
        <ContentBody active={sidebarToggle}>
          <Title>{selectedScript}</Title>
          <Teleprompter words={words} listening={listening} progress={progress} onChange={handleChange}/>
          <Button onClick={handleListening}>
            {listening
              ? 'Stop'
              : 'Start'}
          </Button>
        </ContentBody>}
      </Content>
    </Fragment>
  );
}

export default App;
