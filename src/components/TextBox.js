import React, { useState } from "react";

export default function TextBox(props) {
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleCap = () => {
    let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    setText(newText);
    props.showAlert("Converted to Capitalize", "success");
  };
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    newText=newText.join(" ")
    setText(newText.trim());
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const [text, setText] = useState();
  return (
    <>
      <div className={`container text-${props.mode==='light'?'black':'white'}`}>
        <h1>Enter Text : </h1>
        <div className="mb-3 my-2">
          <textarea
            className="form-control "
            style={{backgroundColor : props.mode==='dark' ? '#000721':'white', color: props.mode==='light' ? 'black':'white'}}
            id="myBox"
            onChange={handleChange}
            value={text}
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 mb-1" onClick={handleUpper}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1 mb-1" onClick={handleLower}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1 mb-1" onClick={handleCap}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-1 mb-1" onClick={handleRemoveSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 mb-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1 mb-1" onClick={handleClear}>
          Clear
        </button>
        <div className="summary">
          <h2>Summary</h2>
          <p>
            {text?.split(" ").filter((element) => {return element.length!==0}).length} Words, {text?.length} Characters
          </p>
        </div>
      </div>
    </>
  );
}
