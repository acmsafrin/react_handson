import { useContext, useEffect, useState } from "react";
import { SelectProvider, useSelect } from "./component/Select";
import Option from "./component/Option";
function App() {
  const value=useSelect()
  return (
    <SelectProvider default="V1"> 
          <Option value="V1" label="L1"></Option>
          <Option value="V2" label="L2"></Option>
    </SelectProvider>
  );
}

export default App;
