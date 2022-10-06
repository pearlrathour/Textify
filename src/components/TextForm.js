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
        let newText = text.toLowerCaseCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
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
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Lowerscase
                </button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

                    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

                    HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.</p>
            </div>
        </>
    )
}
