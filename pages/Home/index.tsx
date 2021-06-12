import Head from 'next/head'
import React ,{useState,useEffect} from 'react'
import SideBar from '../../components/SideBar'
import HomeContent from '../../components/Home/home'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectToken } from '../../redux/features/tokenSlice'
import { useRouter } from 'next/router'

export default function Home() {
  let token = useSelector(selectToken);
  let items = ['PAGE 1','PAGE 2','PAGE 3']
  const [employeeName,setEmployeeName] = useState("")

  const router = useRouter();

  const verify =  async()=>{
    let isVerified = await axios.post('http://localhost:3000/api/verify',{token:token})
    if(isVerified.data.verified!==true || token===null){
     router.push('../')
    }else{
      setEmployeeName(isVerified.data.name)
    }
  }
useEffect(()=>{
  verify()
},[token])
  return (
    <div className="root">
      <Head>
        <title>Employee Management</title>
        <meta name="description" content="Employee Management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainContent">
      <SideBar items={items}/>
      <HomeContent employeeName={employeeName}/>
      </div>
    </div>
  )
  }