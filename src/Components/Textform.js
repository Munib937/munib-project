import React , {useState} from 'react'

function Textform(props) {
      const [text, settext] = useState('');     // text aik variable hain jiss ma Enter a text initail value hain. settext sa value change ho gi.
    //   settext("munib");    iss tarah state chane hoti hain ;

    const  changeupcase = ()=>{
    let newtext = text.toUpperCase();
       settext(newtext);
      props.showalert("Text Was Capitilized" , "success");

    }

    const  changelocase = ()=>{
    let newtext = text.toLowerCase();
       settext(newtext);
       props.showalert("Text Was Lowercase" , "success");


    }


       const  cleartext = ()=>{
    let newtext = " ";
       settext(newtext);
             props.showalert("Text Was Clear" , "success");


    }


     function copyToClipboard() {
        let  copyText = document.getElementById("mybox");
        copyText.select();                    //select method sa sara text copy ho jy ga;;;   
        copyText.setSelectionRange(0,9999);      //or range sa kitna text copy hona chaiya wo ho ga;
        navigator.clipboard.writeText(copyText.value);  // iss navigatior sa puray ka puray text ko copy kr day ga;
      //   alert("copied");
            props.showalert("Text Was Copied" , "success");


     }


     const removespaces = ()=>{
       let newtext = text.split(/[ ]+/);
       settext(newtext.join(" "));
      props.showalert("Remove multiple Spaces" , "success");

     }



       const  onchange = (event)=>{
        settext(event.target.value)
       console.log("onchange");
    }

  return (
    <div>
            <div className="container mt-5" >
                <h3 style={{color : props.mode === 'dark' ? 'white' : 'black' }}>{props.heading} </h3>
                <textarea className="form-control" value={text}  onChange={onchange}id="mybox" rows="12" style={{color : props.mode === 'dark' ? 'white' : 'black'  , backgroundColor : props.mode === 'dark' ? 'black' : 'white'  }}></textarea>
           </div>

           {/* Some button to fire event */}

            <div className="container  my-3 ">
                        <button className="btn btn-outline-primary" onClick={changeupcase}>Convert to Uppercase</button>
                <button className="btn btn-outline-primary mx-3"  onClick={changelocase}>Convert to Lowercase</button>
                <button className="btn btn-outline-primary" onClick={cleartext}> ClearText</button>
                <button className="btn btn-outline-primary mx-3"  onClick={copyToClipboard}>copy Text</button>
                <button className="btn btn-outline-primary"  onClick={removespaces}>Remove Extra Spaces</button>
            </div>

            <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").length} Word & {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Mintuse</p>
                <h3>Preview</h3>

                <p  style={{color : props.mode === 'dark' ? 'white' : 'black' }}>{text.length>0 ? text : "Enter Something to Textbox and Preview here"}</p>
            </div>
    </div>
  )
}

export default Textform
