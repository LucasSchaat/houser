import React, { Component } from 'react'

export default class House extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { house } = this.props
        return(
            <div className='houseContainer' >
                <div>Property Name: {house.propertyname}</div>
                <div>Address: {house.address}</div>
                <div>City: {house.city}</div>
                <div>State: {house.state}</div>
                <div>Zip: {house.zip}</div>
                <button onClick={() => this.props.deleteHouse(house.id)} >Delete</button>
            </div>
        )
    }
}