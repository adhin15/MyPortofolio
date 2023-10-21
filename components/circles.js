import React, { useState } from "react";

const Circles = () =>{
  const [active,setActive] = useState(false)
    return(
        <div className="main-container" id="circle container">
        <div className={`logo-container ${active ? 'active' : ''}`} >
          <div className="main-logo text-center">
            <img src="./logo/skill-logo.png" onClick={()=>{setActive(!active)}} style={{ width: "100%" }} />
          <h3 className={`text-2xl animate-up-down mt-4 ${active ? 'hidden': 'block'}`}>Click Me!</h3>
          </div>
          <div className="item-logo-1">
            <img src="./logo/html-logo.png" style={{ width: "100%" }} />
          </div>
          <div className="item-logo-2">
            <img src="./logo/css-logo.png" style={{ width: "100%" }} />
          </div>
          <div className="item-logo-3">
            <img src="./logo/js-logo.png" style={{ width: "100%" }} />
          </div>
          <div className="item-logo-4">
            <img src="./logo/react-logo.png" style={{ width: "100%" }} />
          </div>
          <div className="item-logo-5">
            <img src="./logo/github-logo.png" style={{ width: "100%" }} />
          </div>
          <div className="item-logo-6">
            <img src="./logo/nextjs-logo.png" style={{ width: "100%" }} />
          </div>
          <div className="item-logo-7">
            <img src="./logo/tailwind-logo.png" style={{ width: "100%" }} />
          </div>
          <div className="item-logo-8">
            <img src="./logo/vscode-logo.png" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    )
}

export default Circles;