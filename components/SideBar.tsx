import React from 'react'
import Link from 'next/Link'
const SideBar:React.FC<{items:string[]}> = ({items}) => {

    return (
        <div className="sidebar">
            <h3 className="sidebar_title">Features</h3>
            {items.map((item)=><Link href={item}><li className="item">{item}</li></Link>)}
        </div>
    )
}

export default SideBar
