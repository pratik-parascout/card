import React from "react";
import Photos from "../images/p.jpg"

export default function Photo(){
    return(
        <div className="container1">

            <img 
            src={Photos}
            className="img--me"
            alt=""
            />

            <hr/>

            <div className="name">
            <h1>Pratik Kumar</h1>
            <h3>Frontend Developer</h3>
            </div>
            
            <div className="l">
                
                <button>
                    <label>
                        <a href="mailto:pratikumar56@gmail.com">Email</a></label>
                </button>
                
                <button>
                    <label>
                        <a href="https://www.linkedin.com/in/pratik-kumar-b82761228">LinkedIn</a>
                    </label>
                </button>
            </div>
        </div>
    )
}