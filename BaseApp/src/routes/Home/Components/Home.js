//the main component of the Home route and will carry the state of the app
import React from "react";
import {
    Text,
    View
  } from 'react-native';
  class Home extends React.Component{

    componentDidMount(){
      this.props.setName();
    }
    render(){
      return(
        <View style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text> Hellow </Text>
        </View>
      );
    }
  }
  export default Home;