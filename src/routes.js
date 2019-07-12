import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'

export default class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/wizard' component={Wizard} />
            </Switch>
        )
    }
} 