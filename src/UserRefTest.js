import { useEffect, useRef, useState } from "react";


function UseRefTest() {
  const [counter,setCounter]=useState(0);
  const obj=useRef(0)

  console.log(obj)

  useEffect(()=>{
    //debugger
    
    obj.current +=counter;

    console.log('Init use effect App '+obj.current)
  },[counter]);

  useEffect(()=>{
    //debugger
    console.log('userRefChanged '+obj)

  },[obj]);


  let clikHandler=()=>{
    setCounter((v)=>v+1)
  }

  return (
    <div className="App">
      <h1 onClick={clikHandler}>{counter}</h1>    
    </div>
  );
}

export default UseRefTest;
