import axios from 'axios'
import { useDispatch } from 'react-redux'



const fetchData = ()=>{
    
    return ()=>{
        const dispatch = useDispatch();
        dispatch({type: 'fetchDataRequest'})
        axios.get('http://localhost:3000/loginsystem/getdata').then((res)=>{
            return dispatch({type: 'success',payload: res})
        }).catch((err)=>{
            return dispatch({type:'failure',error:err})
        })
    }

}

export default fetchData;