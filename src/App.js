import { useEffect, useState } from "react";
import {store} from "./Store";
import Component1 from "./Component1";
function App() {
  
  return (
    <div className="App">
      <h1 >Hello</h1>    
      <button onClick={e=>store.increment()}>increment</button>

      <Component1/>
      <Component1/>
    </div>
  );
}

export default App;
