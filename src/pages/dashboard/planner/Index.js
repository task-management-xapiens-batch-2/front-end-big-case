import React from 'react'
import NavigationBar from '../../../components/NavigationBar.component'
import Jumbotron from '../../../components/Jumbotron.component'
import MainMenu from './MainMenu'


const DashboardSPV = () => {
    return (
        <>
            <NavigationBar notPlanner={true}/>
            {/* <Jumbotron notPlanner={true} description={"Welcome to planner configuration. Here you can create a new project and submit it to supervisor."}/> */}
            <MainMenu />
        </>
    )
}

export default DashboardSPV