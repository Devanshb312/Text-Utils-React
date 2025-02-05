import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

 const [text,setText] = useState("");

 const handleUppCase = () => {
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to UPPER CASE!","success");

 }
 const handleLoCase = () => {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lower case!","success");

 }

const handleClr = () => {
  let newText = "";
  setText(newText);
  props.showAlert("Text Cleared!","success");

 }
  const handleCopy = ()=> {
    navigator.clipboard.writeText(text);
   
    props.showAlert("Text Copied to Clipboard!","success");
  }

  const handleExSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed!","success");
  }


const HandleonChange = (event) => {
  setText(event.target.value);
}

 let Cstyle ={ color: props.mode === "light"? "black":"white"}; 

  return (
    <>
   
  <div className="mb-3 container mt-3">
    
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
    <h2 style = {Cstyle}>{props.heading}</h2>
    </label>

    
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={10}
      value={text}
      onChange={HandleonChange} 
      style = {{backgroundColor : props.mode === "light"?"white":"#05010e",
        color : props.mode === "light"? "black":"white"
      }}
      
    />
     <button className={`btn btn${props.mode === "light"? "":"-outline"}-primary mt-3 mx-1 my-1`} onClick={handleUppCase} disabled={text.length === 0}>Convert to UpperCase</button>
     <button className={`btn btn${props.mode === "light"? "":"-outline"}-primary mt-3 mx-1 my-1`} onClick={handleLoCase} disabled={text.length === 0}>Convert to LowerCase</button>
     <button className={`btn btn${props.mode === "light"? "":"-outline"}-primary mt-3 mx-1  my-1`} onClick={handleClr} disabled={text.length === 0}>Clear Text</button>
     <button className={`btn btn${props.mode === "light"? "":"-outline"}-primary mt-3 mx-1  my-1`} onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
     <button className={`btn btn${props.mode === "light"? "":"-outline"}-primary mt-3 mx-1  my-1`} onClick={handleExSpaces} disabled={text.length === 0}>Remove Extra Space</button>



  </div>

  <div className="container">
    <h3 style = {Cstyle}>Your Text Summary</h3>
    <p style = {Cstyle}>{text.split(/\s+/).filter((element) =>{return element.length !==0}).length} words and {text.length} characters</p>
    <p style = {Cstyle}>{0.008 * text.split(" ").filter((element) =>{return element.length !==0}).length} minutes taken to read</p>
    <h3 style = {Cstyle}>Preview</h3>
    <p style = {Cstyle}>{text}</p>
  </div>


    
    </>
  )
}
