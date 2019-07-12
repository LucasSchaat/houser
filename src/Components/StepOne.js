import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class StepOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
        }
        this.addHouse = this.addHouse.bind(this)
    }
    
    handleChange = e => {
        let {name, value} = e.target
        this.setState({ [name]: value })
    }

    addHouse() {
        const { propertyName, address, city, state, zip } = this.state
        axios
            .post ('/api/add', {propertyName, address, city, state, zip} )
            .then(() => {
                this.setState({
                    propertyName: '',
                    address: '',
                    city:'',
                    state: '',
                    zip: 0,
                })
                return this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        const { propertyName, address, city, state, zip } = this.state
        return(
            <div className='wizard'>
                <div className='wizardSub1'>
                    <div>Add New Listing</div>
                    <Link className='cancelButton' to='/' >Cancel</Link>
                </div>
                <div>
                    <div>Property Name</div>
                    <input onChange={this.handleChange} name='propertyName' value={propertyName} type='text' />
                    <div>Address</div>
                    <input onChange={this.handleChange} name='address' value={address} type='text' />
                    <div>City</div>
                    <input onChange={this.handleChange} name='city' value={city} type='text' />
                    <div>State</div>
                    <input onChange={this.handleChange} name='state' value={state} type='text' />
                    <div>Zip</div>
                    <input onChange={this.handleChange} name='zip' value={zip} type='number' placeholder={zip}/>
                    <button onClick={this.addHouse}>Complete</button>
                </div>
            </div>
        )
    }
}