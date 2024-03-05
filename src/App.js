import { useEffect, useState } from "react";

function Child(){
  console.log('\t\t Child rended started')

  useEffect(()=>{
    //debugger
    console.log('\t\t Init use effect Child ')

   
    return ()=>{
      console.log('\t\t Clean up use effect Child ')
    }
  },[]);

  return <>Child</>
}

function App() {
  console.log("App render started")
  const [counter,setCounter]=useState(()=>{
    console.log("lazy initialization of counter")
    return 0;
  });

  const [show,setShow]=useState(false)

  useEffect(()=>{
    //debugger
    console.log('Init use effect App '+counter)

    if(counter===3){
      setShow(true)
    }else{
      setShow(false)
    }

    return ()=>{
      console.log('Clean up use effect App '+counter)
    }
  },[counter]);

  let clikHandler=()=>{
    setCounter((v)=>v+1)
  }

  console.log("App render ended")
  return (
    <div className="App">
      <h1 onClick={clikHandler}>{counter}</h1>
      {show && <Child/>}
    </div>
  );
}

export default App;
