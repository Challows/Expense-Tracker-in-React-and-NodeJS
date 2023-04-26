import React from 'react'
import { MenuData } from '../../../Data/Data';
import './Menu.css'
import '../Sidebar.css'
import { UilSignOutAlt } from "@iconscout/react-unicons";



const Menu = ({toggleTab, activeTab}) => {


  return (
    <div className='menu glass'>
      {MenuData.map((item, index) => {
        return (
          <div 
            className= { activeTab === index ? "menu-items active" : "menu-items"}
            onClick={()=>toggleTab(index)}
            key={index}            
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
        )
      })}

        <div className="menu-items">
          <UilSignOutAlt />
          <span>Log out</span>
        </div>

    </div>
  )
}

export default Menu