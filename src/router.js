import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Main from './main'
import App from './App'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Main>
                    <Route path = "/admin" component ={() =>
                        <App>
                            <Switch>
                                <Route exact path="/admin/home" component={Home}/>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                            </Switch>
                        </App>
                    }/>
                </Main>
            </HashRouter>
        )
    }
}
