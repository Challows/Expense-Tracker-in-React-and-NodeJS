import './Sidebar.css';
import React from 'react'
import Menu from './Menu/Menu'
import Brand from './SidebarTop/Brand'
import { motion } from "framer-motion";
import Profile from './ProfileCard/Profile'
import { UilBars } from "@iconscout/react-unicons";

const Sidebar = (props) => {

  const [expanded, setExpaned] = React.useState(true);

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  return (

    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div 
        className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:''}
      >
          <Brand />
          <Profile
            toggleTab={props.toggleTab}
          />
          <Menu
            toggleTab={props.toggleTab}
            activeTab={props.activeTab}
          />

      </motion.div>
    </>
  )
}

export default Sidebar