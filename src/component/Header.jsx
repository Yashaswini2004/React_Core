import React from "react";
import "./Header.css";
import reactImage from "../assets/react-core-concepts.png";
 const genText=["Fundamental","Core","Crutial"]
  function genRandomInt(max){
     return Math.floor(Math.random()*(max+1));
  }
export default function Header(){
  return (
     <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {genText[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}