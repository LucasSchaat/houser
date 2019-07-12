import React, { Component } from 'react'
import House from '../House/House'

export default class Dashboard extends Component {
    render() {
        return(
            <div className='dashboard' >
                <div>Dashboard</div>
                <div>
                    <House />
                </div>
            </div>
        )
    }
}