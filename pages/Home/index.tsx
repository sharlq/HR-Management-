import Head from 'next/head'
import React ,{Fragment} from 'react'
import SideBar from '../../components/SideBar'
import HomeContent from '../../components/Home/home'
export default function Home() {
  let items = ['PAGE 1','PAGE 2','PAGE 3']
  let employeeName = 'Mohammed'
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