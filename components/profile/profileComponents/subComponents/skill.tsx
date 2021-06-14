import React from 'react'
import {Clear} from '@material-ui/icons';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setSkills } from '../../../../redux/features/skillsSlice';
const Skill:React.FC<{skill:string,background:string,index:number,}> = ({skill,background,index}) => {
  
  let dispatch = useDispatch();
  const handleDelete=()=>{
   if( axios.patch('http://localhost:3000/api/deleteSkill',{index})){
   //please fix me :")
   dispatch(setSkills({skills:Math.random()}))}
  


  
  }


    return (
        
              <div className="skill" style={{background:background}}>
                {skill}
                <div className="skill-taile">
                <div className="divider"/>
                <Clear onClick={()=>handleDelete()}/>
                </div>
              </div>
            
    )
}

export default Skill
