import Head from 'next/head'
import Image from 'next/image'
import React ,{Fragment} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
export default function Home() {
  let items = ['PAGE 1','PAGE 2','PAGE 3']
  return (
    <div className="root">
      <Head>
        <title>Employee Management</title>
        <meta name="description" content="Employee Management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
      <NavBar />
      <div className="mainContent">
      <SideBar items={items}/>
      </div>
      </main>
    </div>
  )
  }