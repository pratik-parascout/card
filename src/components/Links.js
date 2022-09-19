import React from "react";
import Photos from "../images/Git.png"
import Photos1 from "../images/image1.png"
import Photos2 from "../images/LinkedIn.png"

export default function Links() {
    return (
        <div className="main2">
            <footer>
                <a href="https://www.github.com/pratik-scout"><img src={Photos} alt="Git" className="links" /></a>
                <a href="https://www.instagram.com/para_scout/"><img src={Photos1} alt="Insta" className="links" /></a>
                <a href="https://www.linkedin.com/in/pratik-kumar-b82761228"><img src={Photos2} alt="LinkedIn" className="links" /></a>

            </footer>
        </div>

    )
}