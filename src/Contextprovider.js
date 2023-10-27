import { useState } from "react";
import { myContext } from "./context/context";


 const MyProvider = ({children})=>{
const [text, setText] = useState('');
return(
<myContext.Provider value= {{text,setText}} >
    {children}
  </myContext.Provider>
)
}

export default MyProvider