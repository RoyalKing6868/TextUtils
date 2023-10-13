import React from 'react'

export default function About(props) {
  let myStyle = {
    color : props.mode==='dark'?'white':'dark',
    backgroundColor:props.mode==='dark'? '#000721':'white',
    border: 'none',
    outline :'none'
  }
  return (
    <>
      <div className="container">
        <div className={`px-4 py-5 my-5 text-center text-${props.mode==="light"?"black":"white"}`}>
            <h1 className="display-5 fw-bold ">Text Util's</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 my-2">Introducing the Text Utils Application, a labor of love meticulously crafted by Swarup Hande using the power of React. This innovative tool is designed to enhance your text processing experience, providing you with a seamless and efficient solution for all your text-related needs. Enjoy the convenience and functionality brought to you by this passion-driven project!.</p>
            </div>
            <div className="footertitle">
                <strong>Developed by Swarup (RoyalKing 👑). Made with Love ❤️</strong>
            </div>
            
        </div>
        <h3 className="headingAbout text-center my-4" style={{color:props.mode==='dark'?'white':'black'}}><strong>Why TextUtils?</strong></h3>
        
        <div className="accordion text-center  my-3" id="accordionExample" style={myStyle}>
          <div className="accordion-item " style={{border:'none'}} >
            <h2 className="accordion-header" style={myStyle}>
              <button className="btn text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <h5><strong>Analyze Your Text!!</strong></h5>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count and character count. 
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{border:'none'}}>
            <h2 className="accordion-header" style={myStyle}>
              <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <h5><strong>Free to use!!</strong></h5>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit
              </div> 
            </div>
          </div>
          <div className="accordion-item" style={{border:'none'}}>
            <h2 className="accordion-header" style={myStyle}>
              <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <h5><strong>Browser Compatible</strong></h5>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
