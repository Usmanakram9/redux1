import React from 'react'
import { useContext  } from 'react'
import { myContext } from '../context/context'




const Test = () => {
const {text, setText} = useContext(myContext)

const clickme =()=>{
    setText('hellow')
}

  return (
    <>
    <div>{text}</div>
    <button onClick={clickme} value="clik">Click me</button>
    </>
  )
}


export const exam = () => {
    
   return( 
   <>
   <p>asdf</p>
   </>
   )
    }
export default Test