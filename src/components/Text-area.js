import React,{useState} from 'react'

export default function Text1(props) {

    const [text, setText] = useState(""); //hooks
    let val;
    if(props.mode1===false){
        val="light";
    }
    else{
        val="dark";
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("to uppercase","Success");
    };
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    };
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClear =()=>{
        let newText="";
        setText(newText);
    };

    const handleCopy = ()=>{
        let text = document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)   //space of one or more than 1
        setText(newText.join(" "));
    };
    return (
        <>
        <div className={`container-${val}`}>
            <h1><b>Enter Your text here</b></h1>
            <textarea name="enter text" id="box" className={`text-area-${val}`} cols="100" rows="10" value={text} onChange={handleOnChange}></textarea>
            <button className={`upper-${val}`} onClick={handleUpClick} >convert to upper case</button>
            <button className={`upper-${val}`} onClick={handleDownClick} >convert to lower case</button>
            <button className={`upper-${val}`} onClick={handleExtraSpaces} >Handle Space</button>
            <button className={`upper-${val}`} onClick={handleCopy} >copy</button>
            <button className={`upper-${val}`} onClick={handleClear} >clear</button>

            <div className={`wordCount-${val}`}>
                <h1>your text summary</h1>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>

                <h1>Preview</h1>
                <div className={`pre-${val}`}>

                <p><b>{text}</b></p>

                </div>
            </div>
        </div>
        
        </>
    )
}

