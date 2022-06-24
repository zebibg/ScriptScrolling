import React, { Fragment, useState, useEffect } from "react";

function ScriptList({scripts, setSelectedScript, setWords}){

    return (
        <>
        {scripts.map((script)=>(<div onClick={()=>{setWords(script.text.split(' ')); setSelectedScript(script.title)}} style={{margin:"5px"}}>{script.title}</div>))}
        </>
)
}

export default ScriptList;