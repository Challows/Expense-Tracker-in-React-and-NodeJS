import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Right from './components/Right/Right'
import ProfileSection from './components/Main/OtherTabs/Profile/ProfileSection'
import Transact from './components/Main/OtherTabs/Transact/Transact'
import Analytics from './components/Main/OtherTabs/Analytics/Analytics'
import Settings from './components/Main/OtherTabs/Settings/Settings'
import mainBackground from './imgs/mainBackground.jpg'


const MainWrapper = () => {

    const [selectedTab, setSelectedTab] = React.useState(JSON.parse(localStorage.getItem('selectedTab')))
    // const [personalData, setPersonalData] = useState(
    //     {
    //         balance: 13000,
    //         lastMonth: {
    //           income: 12000,
    //           expenses: 49000,
    //           savings: 7000
    //         },
    //         thisMonth: {
    //           income: 130000,
    //           expenses: 45000,
    //           savings: 4000
    //         }
    //       }
    // )

    React.useEffect(()=>{
        localStorage.setItem('selectedTab', JSON.stringify(selectedTab))
        // localStorage.setItem('personalData', JSON.stringify(personalData))
    },[selectedTab])

    const tabs = [
        <Main
            toggleTab={setSelectedTab}
        />,
        <ProfileSection />,
        <Transact />,
        <Analytics />,
        <Settings />
    ]

  return (
    <div className="wrapper">
        <Sidebar
            toggleTab={setSelectedTab}
            activeTab={selectedTab}
        />
        {tabs[selectedTab]}
        <Right />
    </div>
  )
}

export default MainWrapper