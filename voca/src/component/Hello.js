import { useState } from "react";
import World from "./World";

const Hello= function(){
    // let name= "Mike";
    const [name, setName]= useState("Mike");

    function changeName(){
        const newName= name=== "Mike"?"Jane":"Mike";
        setName(newName);
    }

    return (
        <div>
            <h1>State</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
        </div> 
    
    )
}

export default Hello;