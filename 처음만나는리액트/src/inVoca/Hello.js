import { useState } from "react";
import World from "./World";
import UserName from "./UserName";

const Hello= function(props){
    const [name, setName]= useState("Mike");
    const [age, setAge]= useState(props.age);
    const msg= age>19 ? "Adult":"Child";

    function changeName(){
        const newName= name=== "Mike"?"Jane":"Mike";
        setName(newName);
        setAge(age+1)
    }

    return (
        <div>
            <h1>State</h1>
            <h2>{name}({age}) : {msg}</h2>
            <UserName name={name} />
            <button onClick={changeName}>Change</button>
        </div> 
    
    )
}

export default Hello;