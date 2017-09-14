import  React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Layout from './Layout'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Index';
import Signup from './components/signup/Signup';
import RequestService from './components/requestService/RequestService';
import AllServices from './components/services/allServices/AllServices'

export default class Routes extends React.PureComponent {
    render() {
        return (     
        <Router history={browserHistory}>
            <Route path='/' component={Layout}>
            <IndexRoute component={Home}/>
              <Route path='home' component={Home} />
              <Route path='allServices' component={AllServices} />
              {/* <Route path='signup' component={Signup} /> */}
              <Route path='request_service' component={RequestService} />
            </Route>
            </Router>
        )
    }
}