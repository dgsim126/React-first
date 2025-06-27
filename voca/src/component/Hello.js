import World from "./World";

const Hello= function(){
    function showName(){
        console.log("Donggeun");
    }
    function showAge(age){
        console.log(age)
    }
    function showText(e){
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button onClick={() => {showAge(10);}}>Show age</button>

            <input type="text" onChange={showText}/>
        </div> 
    
    )
}

export default Hello;