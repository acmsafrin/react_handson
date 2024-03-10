import { useContext, useReducer } from "react";
import context  from "./Store";
import { ChildElement } from "./ChiledElemenet";

function redFn(oldState,action){
    switch(action){
        case 'toggle-light':
            return {...oldState,theme: "light"}
        case 'toggle-dark':
                return {...oldState,theme: "dark"}
    }
}

export function ContextApp(){
    const [state,dispatch]=useReducer(redFn,{theme:"dark"});

    return (
        <context.Provider value={{state,dispatch}}>
        <div className="App">
            <ChildElement></ChildElement>
        </div>
        </context.Provider>
      );
}

