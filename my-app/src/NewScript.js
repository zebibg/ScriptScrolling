import React, { useState, useEffect } from "react";
const axios = require('axios');

function NewScript({setAddingScript}) {
  const [title, setTitle] = useState(['']);
  const [text, setText] = useState(['']);

  const submitForm = ()=>{
    setAddingScript(false);
    console.log({title, text})
    axios.post("http://localhost:3001/scripts", {headers: {'Access-Control-Allow-Origin' : '*'}})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <> 
      <label> Title:</label>
      <input type="text" id="title" style={{margin: "10px"}} onChange={(e)=>{setTitle(e.target.value)}}></input>
      <label > Text:</label>
      <input type="text" id="text" style={{margin: "10px 0px", height:"500px", width:"90%"}} onChange={(e)=>{setText(e.target.value)}}></input>
      <button onClick={submitForm}>Submit Script</button>
    </>
  );
}

export default NewScript;