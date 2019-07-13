import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import store, { STEP_THREE } from '../store'

class StepThree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mortgage: 0,
            rent: 0,
        }
        this.addHouse = this.addHouse.bind(this)
    }
    
    componentDidUpdate(prevProps) {
        const reduxState = store.getState()
        if(prevProps.data !== this.props.data) {
            this.setState({ mortgage: reduxState.mortgage, rent: reduxState.rent })
        }
    }
    
    componentDidMount() {
        store.subscribe( () => {
            const reduxState = store.getState()
            this.setState ({ mortgage: reduxState.mortgage, rent: reduxState.rent })
        })
    }

    addStepThree = () => {
        const { mortgage, rent } = this.state
        store.dispatch({
            type: STEP_THREE,
            payload: {mortgage, rent}
        })
    }
    
    handleChange = e => {
        let {name, value} = e.target
        this.setState({ [name]: value })
    }

    addHouse() {
        const { propertyName, address, city, state, zip, image, mortgage, rent } = store.getState()
        axios
            .post ('/api/add', {propertyName, address, city, state, zip, image, mortgage, rent} )
            .then(() => {
                return this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        const { mortgage, rent } = this.state
        console.log(store.getState())
        return(
            <div className='wizard'>
                <div>Recommended Rent: $0</div>
                <div>
                    <div>Monthly Mortgage Amount</div>
                    <input onChange={this.handleChange} name='mortgage' value={mortgage} type='number' placeholder={mortgage}/>
                    <div>Desired Monthly Rent</div>
                    <input onChange={this.handleChange} name='rent' value={rent} type='number' placeholder={rent}/>
                    <button onClick={() => {
                        this.props.history.push('/wizard/step2')
                        this.addStepThree()
                        console.log(store.getState())
                    }}>Previous Step</button>
                    <button onClick = { () => {
                        this.addStepThree()
                        this.addHouse()
                        }}>Complete</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepThree)