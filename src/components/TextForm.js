import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed", "success");
    }

    const handleReverseText = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text reversed", "success");
    }

    const handleCapitalizeWords = () => {
        let newText = text.split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        setText(newText);
        props.showAlert("Capitalized each word", "success");
    }

    const handleCountVowelsAndConsonants = () => {
        let vowelsCount = text.match(/[aeiouAEIOU]/g)?.length || 0;
        let consonantsCount = text.match(/[^aeiouAEIOU\s]/g)?.length || 0;
        props.showAlert(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`, "success");
    }

    const handleFindAndReplace = () => {
        let findText = prompt("Enter the word to find:");
        let replaceText = prompt("Enter the word to replace with:");
        if (findText && replaceText) {
            let newText = text.replaceAll(findText, replaceText);
            setText(newText);
            props.showAlert(`Replaced "${findText}" with "${replaceText}"`, "success");
        }
    }
    const handleEncryptText = () => {
        let shift = 3;  // Caesar Cipher Shift
        let newText = text.replace(/[a-zA-Z]/g, function (char) {
            return String.fromCharCode(
                ((char <= 'Z' ? 90 : 122) >= (char.charCodeAt(0) + shift)) ?
                    char.charCodeAt(0) + shift : char.charCodeAt(0) - 26 + shift
            );
        });
        setText(newText);
        props.showAlert("Text encrypted", "success");
    }

    const handleTextStatistics = () => {
        let sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;
        let paragraphCount = text.split(/\n+/).filter(paragraph => paragraph.length > 0).length;
        props.showAlert(`Sentences: ${sentenceCount}, Paragraphs: ${paragraphCount}`, "success");
    }

    const handleAlternateCase = () => {
        let newText = text.split('').map((char, index) => 
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('');
        setText(newText);
        props.showAlert("Alternating case applied", "success");
    }

    const handleRemoveNumbers = () => {
        let newText = text.replace(/[0-9]/g, '');
        setText(newText);
        props.showAlert("Numbers removed", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#111c55" : "white", color: props.mode === "dark" ? "white" : "#042743" }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleAlternateCase}>Alternate Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveNumbers}>Remove Numbers</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleReverseText}>Reverse Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleEncryptText}>Encrypt Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeWords}>Capitalize Each Word</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCountVowelsAndConsonants}>Count Vowels & Consonants</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleFindAndReplace}>Find and Replace</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleTextStatistics}>Text Statistics</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
