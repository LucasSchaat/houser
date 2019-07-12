import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super()
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios
            .get('/api/houses')
            .then(res => {
                this.setState({ houses: res.data })
            })
            .catch(err => console.log(err))
    }

    deleteHouse = (id) => {
        axios
            .put(`api/delete/${id}`)
            .then(res => {
                this.setState({ houses: res.data })
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return(
            <div className='dashboard' >
                <div className='dashboardSub1'>
                    <div className='dashboardTitle'>Dashboard</div>
                    <button className='dashboardButton'>Add New Property</button>
                </div>
                <div>
                    {this.state.houses.map(house => {
                        return (
                            <House key={house.id} house={house} deleteHouse={this.deleteHouse}/>
                    )})}
                </div>
            </div>
        )
    }
}