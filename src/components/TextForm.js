import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = (event) => {
        // console.log("Copy");
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        // console.log("Copy");
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    //update without reloading
    const [text, setText] = useState("");
    //text="new text";     //wrong way to change set
    //setText("new text"); //correct way to change state
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
                    Convert to Lowerscase
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
                    Copy Text
                </button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p></p>
            </div>
        </>
    )
}
