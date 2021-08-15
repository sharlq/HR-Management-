import React,{useEffect} from 'react'
import { useVerify } from "../customHooks/useVerify"; 
import {useDispatch} from "react-redux";

export const GlobalLogic = () => {
    const dispatch = useDispatch();
    const userData = useVerify();
    useEffect(() =>{
      if(userData){
        dispatch({type:"INITIALIZE_DATA"})
      }
    },[userData])
    return (
        <div style={{ display:"none"}}>
            
        </div>
    )
}


