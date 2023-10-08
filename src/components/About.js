import React from 'react'

export default function About(props) {
  return (
    <>
        <div className={`px-4 py-5 my-5 text-center text-${props.mode==="light"?"black":"white"}`}>
            <h1 className="display-5 fw-bold ">Text Util's</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 my-2">Introducing the Text Utils Application, a labor of love meticulously crafted by Swarup Hande using the power of React. This innovative tool is designed to enhance your text processing experience, providing you with a seamless and efficient solution for all your text-related needs. Enjoy the convenience and functionality brought to you by this passion-driven project!.</p>
            </div>
            <div className="footertitle">
                <strong>Developed by Swarup (RoyalKing 👑). With Love ❤️</strong>
            </div>
        </div>
    </>
  );
}
