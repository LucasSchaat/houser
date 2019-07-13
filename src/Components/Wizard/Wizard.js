import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import StepOne from '../StepOne'
import StepTwo from '../StepTwo'
import StepThree from '../StepThree'

export default class Wizard extends Component {
    // constructor(props) {
    //     super(props)
    // }
    
    render() {
        return(
            <div className='wizard'>
                <div className='wizardSub1'>
                    <div>Add New Listing</div>
                    <Link className='cancelButton' to='/' >Cancel</Link>
                    <Switch>
                        <Route exact path='/wizard/step1' component={StepOne} />
                        <Route exact path='/wizard/step2' component={StepTwo} />
                        <Route exact path='/wizard/step3' component={StepThree} />
                    </Switch>
                </div>
            </div>
        )
    }
}


// CODE FOR PART 1:

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// export default class Wizard extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             propertyName: '',
//             address: '',
//             city: '',
//             state: '',
//             zip: 0,
//         }
//         this.addHouse = this.addHouse.bind(this)
//     }
    
//     handleChange = e => {
//         let {name, value} = e.target
//         this.setState({ [name]: value })
//     }

//     addHouse() {
//         const { propertyName, address, city, state, zip } = this.state
//         axios
//             .post ('/api/add', {propertyName, address, city, state, zip} )
//             .then(() => {
//                 this.setState({
//                     propertyName: '',
//                     address: '',
//                     city:'',
//                     state: '',
//                     zip: 0,
//                 })
//                 return this.props.history.push('/')
//             })
//             .catch(err => console.log(err))
//     }

//     render() {
//         const { propertyName, address, city, state, zip } = this.state
//         return(
//             <div className='wizard'>
//                 <div className='wizardSub1'>
//                     <div>Add New Listing</div>
//                     <Link className='cancelButton' to='/' >Cancel</Link>
//                 </div>
//                 <div>
//                     <div>Property Name</div>
//                     <input onChange={this.handleChange} name='propertyName' value={propertyName} type='text' />
//                     <div>Address</div>
//                     <input onChange={this.handleChange} name='address' value={address} type='text' />
//                     <div>City</div>
//                     <input onChange={this.handleChange} name='city' value={city} type='text' />
//                     <div>State</div>
//                     <input onChange={this.handleChange} name='state' value={state} type='text' />
//                     <div>Zip</div>
//                     <input onChange={this.handleChange} name='zip' value={zip} type='number' placeholder={zip}/>
//                     <button onClick={this.addHouse}>Complete</button>
//                 </div>
//             </div>
//         )
//     }
// }