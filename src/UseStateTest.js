import { useReducer, useState } from "react"

function reduxFn(oldCounter,step){
    return oldCounter+step
}


function UseStateTest(){
    const [counter,setCounter]=useReducer(reduxFn,2)

    

    return (
        <div className="App">
        <h1 onClick={()=>setCounter(10)}>{counter}</h1>  
      </div>
    )
}

export default UseStateTest