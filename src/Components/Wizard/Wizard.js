import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
        }
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
                    <input />
                    <div>Address</div>
                    <input />
                    <div>City</div>
                    <input />
                    <div>State</div>
                    <input />
                    <div>Zip</div>
                    <input name={zip} value={zip} type='number' placeholder={zip}/>
                </div>
            </div>
        )
    }
}