import React, { useState } from "react";
import axios from "axios";
import "../src/App.css";

function App(){
        const [advice,setAdvice]=useState("");

        fetchAdvice();


        function fetchAdvice(){
            axios.get("https://api.adviceslip.com/advice")
            .then((response)=>{
                const {advice}=response.data.slip;
                setAdvice(advice);
            })
            .catch((error)=>{
                console.log(error)
            });
        }


    

    function handleClick(){
        fetchAdvice();
        
    }


    return (
       <div className="container">
        <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={handleClick} type="button"><span>Get Advice</span></button>
        </div>
       </div>
    );
}


export default App;