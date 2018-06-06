import React, {Component} from "react";
import {Router} from "react-native-router-flux";
import PropTypes from "prop-types";
//Provider it will make the store available to apps hyrachy
import { Provider} from "react-redux";

import scenes from "../routes/scenes";

export default class AppContainer extends Component{
    static propTypes ={
        store: PropTypes.object.isRequired
    }
    render(){
        return(
            <Provider store ={this.props.store}>
                <Router scenes={scenes}/>              
            </Provider>
        );
    }   
}