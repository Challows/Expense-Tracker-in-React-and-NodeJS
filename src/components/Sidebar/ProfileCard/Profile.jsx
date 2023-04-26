import React from 'react'
import './Profile.css'
import Profilepic from '../../../imgs/img1.jpeg'
import { personalData } from '../../../Data/Data'

const Profile = ({toggleTab}) => {

  return (
    <div className='profile glass'>
      <div className="profile-img">

        <img 
          src={Profilepic} alt=""
          className="profile-pic"
          onClick={()=>{toggleTab(1)}}
          
          />

        <h4 onClick={()=>{toggleTab(1)}} className='user-name'> {personalData.name} </h4>
        <h5 className='muted-text'>User</h5>
      </div>
    </div>
  )
}

export default Profile