import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import store, { STEP_ONE } from '../store'

class StepOne extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            propertyName: reduxState.propertyName,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState ({
            propertyName: reduxState.propertyName,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            })
        })
    }

    addStepOne = () => {
        const { propertyName, address, city, state, zip } = this.state
        store.dispatch({
            type: STEP_ONE,
            payload: { propertyName, address, city, state, zip }
        })
    }
    
    handleChange = e => {
        let {name, value} = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { propertyName, address, city, state, zip } = this.state
        console.log(propertyName, address, city, state, zip)
        return(
            <div className='wizard'>
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
                    <button onClick={() => {
                        this.props.history.push('/wizard/step2')
                        this.addStepOne()
                        console.log(store.getState())
                    }}>Next Step</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepOne)