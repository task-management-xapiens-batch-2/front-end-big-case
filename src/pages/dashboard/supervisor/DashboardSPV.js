import React from 'react'
import NavigationBar from '../../../components/NavigationBar.component'
import Jumbotron from '../../../components/Jumbotron.component'

const DashboardSPV = () => {
    return (
        <>
            <NavigationBar />
            <Jumbotron notPlanner={true}/>
        </>
    )
}

export default DashboardSPV
