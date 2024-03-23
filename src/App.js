import { useContext, useEffect, useState } from "react";
import { ThemeProvider, ThemeContext, useTheme } from "./provider/ThemeProvider";
function App() {
  const value=useTheme();
  console.log(value)
  return (
  
    <div className="App">
      <h1 >Hello {value.mode} </h1>    
      <button onClick={value.toggle}>Toggle</button>
    </div>
  );
}

export default App;
