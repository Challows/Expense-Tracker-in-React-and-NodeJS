import React from 'react'
import './ProfileSection.css'
import profileBackground from '../../../../imgs/tabs.jpg'

const ProfileSection = () => {
  return (
    <div style={{background: `url(${profileBackground})`}} className="profile-wrapper glass">
      Challows profile
    </div>
  )
}

export default ProfileSection