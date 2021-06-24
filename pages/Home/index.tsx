import Head from 'next/head'
import React ,{useState,useEffect} from 'react'
import SideBar from '../../components/SideBar'
import HomeContent from '../../components/Home/home'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home() {
  let items = ['PAGE 1','PAGE 2','PAGE 3']
  const [employeeName,setEmployeeName] = useState("")

  const router = useRouter();

  const verify =  async()=>{
    let isVerified = await axios.get('http://localhost:3000/api/verify')
    if(isVerified.data.verified!==true){
     router.push('../')
    }else{
      setEmployeeName(isVerified.data.name)
    }
  }
useEffect(()=>{
  verify()
},[])
  return (
    <div className="root">
      <Head>
        <title>Employee Management</title>
        <meta name="description" content="Employee Management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainContent">
      
      <HomeContent employeeName={employeeName}/>
      </div>
    </div>
  )
  }