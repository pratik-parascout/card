import React from "react";
import Links from "./components/Links";
import Photo from "./components/Photo";
import  Main from "./components/Main";

export default function App(){
  return(
    <div className="container">
      <Photo/>
      <Main/>
      <Links/>
    </div>
  )
}