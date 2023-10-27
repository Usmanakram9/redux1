import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { decrement, incerement } from '../redux/Slice';
const Test2 = () => {
const dispatch = useDispatch();
const count = useSelector((state)=>
    state
)
console.log(count)
const changeState=()=>{
    dispatch(incerement())
}
const dec=()=>{
    dispatch(decrement())
}
  return (
<>
    <div>{count}</div>
    <button onClick={changeState} >click mee</button>
    <button onClick={dec} >click </button>
    </>
  )
}

export default Test2