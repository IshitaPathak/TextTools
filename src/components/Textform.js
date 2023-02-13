import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpCase=()=>{
        // console.log("upper case was clicked "+Text);
        // setText('You have clicked on handle Up Clicked');
        let newText=Text.toUpperCase();
        setText(newText);

    } 
     const handleLoCase=()=>{
            // console.log("upper case was clicked "+Text);
            // setText('You have clicked on handle Up Clicked');
            let newText=Text.toLowerCase();
            setText(newText);
    
        }

        const speak = () => {
            let msg = new SpeechSynthesisUtterance(Text);
            window.speechSynthesis.speak(msg);
            const toogle = document.getElementById('toggle')
            if (toogle.textContent == "Speak") {
                toogle.innerHTML = "Stop"
            }
            else {
                toogle.innerHTML = "Speak"
                if (toogle.innerHTML = "Speak"){
                    window.speechSynthesis.cancel()
                }
            }
        }

        const handleClearCase=()=>{
            // console.log("upper case was clicked "+Text);
            // setText('You have clicked on handle Up Clicked');
            let newText='';
            setText(newText);
    
        }

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const HandleCopy=()=>{
        console.log("copied")
        var Text=document.getElementById("myBox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
    }

    const HandleExtraSpace=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [Text,setText]=useState('');
   
//   setText("new text");
  return (
    <>
    <div className="container" style={{color:props.Mode==='dark'?'white':'#3c3636'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
{/* <label for="myBox" class="form-label">Enter your text here</label> */}
  <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'#3c3636'}} 
  value={Text} id="myBox" rows="8"></textarea>

</div>
<button className="btn btn-primary lg mx-2" onClick={handleUpCase}>Convert to Uppercase</button>
<button className="btn btn-primary lg mx-2" onClick={handleLoCase}>Convert to Lowercase</button>
<button  onClick={speak} className="btn btn-primary mx-2" id="toggle">Speak</button>
<button className="btn btn-primary lg mx-2" onClick={handleClearCase}>Clear Text</button>
<button className="btn btn-primary lg mx-2" onClick={HandleCopy}>Copy Text</button>
<button className="btn btn-primary lg mx-2" onClick={HandleExtraSpace}>Remove Extra Space</button>

</div>
<div className="container my-3"style={{color:props.Mode==='dark'?'white':'#3c3636'}}>
<h3>Your Text Summary</h3>
<p>{Text.split(" ").length} words and {Text.length} letters</p>
<p>{0.008*Text.split(" ").length} Minutes read</p>
<h3>Preview</h3>
<p>{Text.length>0?Text:"Enter the text in above textbox to preview it."}</p>
</div>
</>
  )
}

