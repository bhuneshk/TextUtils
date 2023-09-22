import React,{useState} from 'react'

export default function TextForm(props) {
   const [text,setText]=useState(' ');
   const ChangetoUpperCase=()=>{
         let newText=text.toUpperCase();
         setText(newText)
   }
   const ChangetoLowerCase=()=>{
         let newText=text.toLowerCase();
         setText(newText)
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
                
                <textarea className="form-control" value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={ChangetoUpperCase}>Change to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={ChangetoLowerCase}>Change to Lowercase</button>
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