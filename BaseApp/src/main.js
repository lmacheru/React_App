import React from "react";
import {
    Text,
    View
  } from "react-native";

import createStore from "./store/createStore";
import AppContainer from "./AppContainer";
export default class Root extends React.Component{
    renderApp(){
        const initialState = window._INITIAL_STATE_;
        const store = createStore(initialState);
     
        return(
        <AppContainer store={store}/>
        );
    }
    render(){
        return this.renderApp();
    }
}