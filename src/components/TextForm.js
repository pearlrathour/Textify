import React, { useState } from 'react'
// import PropTypes from 'prop-types'


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
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        // console.log("Copy");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    //update without reloading
    const [text, setText] = useState("");
    //text="new text";     //wrong way to change set
    //setText("new text"); //correct way to change state
    return (
        <div>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* 1st{} for js 2nd{} for object */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-outline-info mx-2 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-outline-info mx-2 my-1" onClick={handleLoClick}>
                    Convert to Lowerscase
                </button>
                <button className="btn btn-outline-info mx-2 my-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-outline-info mx-2 my-1" onClick={handleCopy}>
                    Copy Text
                </button>
            </div>
            <div className="container">
                <button className="btn btn-outline-info mx-2 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length-1} words & {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview in here."}</p>
            </div>
        </div >
    )
}
