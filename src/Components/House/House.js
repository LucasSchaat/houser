import React, { Component } from 'react'

export default class House extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { house } = this.props
        return(
            <div className='houseContainer' >
                <img src={house.image} alt='pic of house'/>
                <div>Property Name: {house.propertyname}</div>
                <div>Address: {house.address}</div>
                <div>City: {house.city}</div>
                <div>State: {house.state}</div>
                <div>Zip: {house.zip}</div>
                <div>Monthly Mortgage: {house.mortgage}</div>
                <div>Desired Rent: {house.rent}</div>
                <button onClick={() => this.props.deleteHouse(house.id)} >Delete</button>
            </div>
        )
    }
}