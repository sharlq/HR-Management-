import React from 'react'
import SideBar from '../../components/SideBar'
import Profile from '../../components/profile/Profile'
const Index = () => {
    let items = ['item 1','item 2','item 3','item4']
    return (
        <div>
            <div className="mainContent">
            <SideBar items={items}/>
            <Profile/>
      </div>
        </div>
    )
}

export default Index
