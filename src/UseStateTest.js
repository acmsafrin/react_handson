import { useReducer, useState } from "react"

function reduxFn(oldCounter,action){
    if(action==='increaseCounter'){
        return {...oldCounter, counter:oldCounter.counter+oldCounter.steps}
    }

    if(action==='increaseSteps'){
        return {...oldCounter, steps:oldCounter.steps+1}
    }
}


function UseStateTest(){
    const [state,_setState]=useReducer(reduxFn,{counter:0,steps:1})

    

    return (
        <div className="App">
        <h1 onClick={()=>_setState("increaseCounter")}>{state.counter}</h1>  
        <h1 onClick={()=>_setState("increaseSteps")}>{state.steps}</h1>  
      </div>
    )
}

export default UseStateTest