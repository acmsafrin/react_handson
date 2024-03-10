import { useState } from "react"


function useCounter(init){
    const [count,setCount]=useState(init)
    const add = ()=>setCount((v)=>v+1);
    const sub = ()=>setCount((v)=> v-1);

    return [count,add,sub]

}

export function UseConter(){

    const [num,add,sub]=useCounter(10)

    return <div>
        Counter {num}
        <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>
    </div>
}