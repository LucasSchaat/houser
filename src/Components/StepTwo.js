import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import store, { STEP_TWO } from '../store'

class StepTwo extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            image: reduxState.image
        }
    }
    
    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState ({ image: reduxState.image })
        })
    }

    addStepTwo = () => {
        const { image } = this.state
        store.dispatch({
            type: STEP_TWO,
            payload: {image}
        })
    }
    
    handleChange = e => {
        let {name, value} = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { image } = this.state
        return(
            <div className='wizard'>
                <div>
                    <div>Image URL</div>
                    <input onChange={this.handleChange} name='image' value={image} />
                    <button onClick={() => {
                        this.props.history.push('/wizard/step1')
                        this.addStepTwo()
                        console.log(store.getState())
                    }}>Previous Step</button>

                    <button onClick={() => {
                        this.props.history.push('/wizard/step3')
                        this.addStepTwo()
                        console.log(store.getState())
                    }}>Next Step</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepTwo)