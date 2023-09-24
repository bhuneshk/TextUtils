import React,{useState} from 'react'

export default function TextForm(props) {
   const [text,setText]=useState(' ');
   const ChangetoUpperCase=()=>{
         let newText=text.toUpperCase();
         setText(newText)
         props.showAlert('Changed to UpperCase','Success')
   }

   const ChangetoLowerCase=()=>{
         let newText=text.toLowerCase();
         setText(newText)
         props.showAlert('Changed to UpperCase','Success')
   }

   const ClearText=()=>{
         let newText='' 
         setText(newText)
         props.showAlert('Cleared!','Success')
   }

   const CopyText=()=>{
         let text=document.getElementById('myBox');
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert('Copied to Clipboard!','Success')
   }

   const removeExtraSpaces=()=>{
         let newText=text.split(/\s+/);
         setText(newText.join(" "));
         props.showAlert('Extra Spaces are removed','Success')
   }

   const handlechange=(event)=>{
         setText(event.target.value)
   }

   let word_arr=text.split(' ');
   let words=word_arr.length;
   if(word_arr[words-1]===""){
     words=words-1;
   }
    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="form-group">
                
                <textarea className={`form-control bg-${props.mode==='light'?'white':'black'} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handlechange} id="myBox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={ChangetoUpperCase}>Change to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={ChangetoLowerCase}>Change to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={ClearText}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={CopyText}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div  className='container my-3'>
             <h2>Your Text Summary</h2>
             <p>{words} words and {text.length} characters</p>
             <p>{text.split(' ').length*0.008} Minutes read</p>
             <h2>Preview</h2>
             <p>{text}</p>
        </div>
        </>
    )
}