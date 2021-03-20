import React from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Login from '../login/Login';
import Home from '../home/Home';


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/Home" component={Home} />
            </Router>
        )
    }
}

export default AppRouter ;