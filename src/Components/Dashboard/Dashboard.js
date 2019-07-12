import React, { Component } from 'react'
import House from '../House/House'

export default class Dashboard extends Component {
    render() {
        return(
            <div className='dashboard' >
                <div className='dashboardSub1'>
                    <div className='dashboardTitle'>Dashboard</div>
                    <button className='dashboardButton'>Add New Property</button>
                </div>
                <div>
                    <House />
                </div>

            </div>
        )
    }
}