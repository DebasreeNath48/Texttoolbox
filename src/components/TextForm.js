import React, {useState} from 'react'
//useState is a hook

export default function TextForm(props) {
    const [text, setText] = useState("");
    //text is a state variable and setText is an updation function. array destructing is used
    //text = "new text";//wrong way to change state
    //setText("new text");//correct way to change state

    const handleUpClick = ()=>{
        //console.log("Upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoClick = ()=>{
        //console.log("Upper case was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleclearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleCopy = ()=>{
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }

    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    return (
        <>
        <div className='container' style={{color : props.mode==="dark"?"white":"#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="dark"?"#111c55":"white", color : props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color : props.mode==="dark"?"white":"#042743"}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((ele)=>{return ele.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length !== 0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
