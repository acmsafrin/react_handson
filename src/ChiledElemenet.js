import { useContext } from "react";
import context from "./Store";

export function ChildElement(){
    const {state,dispatch}=useContext(context);

    return <div>
        Hi There {state.theme}
        <button onClick={()=>dispatch('toggle-light')}>Toggle Light</button>
        <button onClick={()=>dispatch('toggle-dark')}>Toggle Dark</button>
    </div>
}