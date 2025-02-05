import React from 'react'

export default function About(props) {

   
//  const[myStyle , setmystyle] = useState ({
//     color: "white",
//     backgroundColor: "black"
// })

//  const [BtnText,setBtnText] = useState("Enter Light Mode");
let myStyle = {
  color: props.mode === "light"? "black":"white",
  backgroundColor : props.mode === "light"? "white":"#05010e"
}





  return (
    <>
    <div className="container my-5" style={myStyle}>
        <h1>About Us</h1>
     <div className="accordion my-5" id="accordionExample" style={myStyle} >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        style={myStyle}
      >
        Analyze Your Text
        
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={myStyle}>
        <strong>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        style={myStyle}
      >
        Free To Use
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={myStyle}>
       <strong>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong>
    
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
        style={myStyle}
      >
         Browser Compatible
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" style={myStyle}>
     <strong> This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
      </div>
    </div>
  </div>
</div>

</div>



    
    
    </>
   

  )
}
