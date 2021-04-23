import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import MapView from 'react-native-maps';
import axios from 'axios'
import Appbar from './Screens/Appbar'
import Login from './Screens/Login'
import Style from './Styles/style'
import OnBoard from './Screens/OnBoardingScreen'
import Start from './Screens/Startup'
import HomePage from './Screens/CustomerHomePage'
import SignupCustomer from './Screens/SignupCust';
import AgentSignup from './Screens/SignUpAgent';
import SignupRestaurant from './Screens/SignupRestaurant'
import RestaurantHomePage from './Screens/RestaurantHome'
import AgentHome from './Screens/AgentHome'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Track from './Screens/Tracking';
import { StyleSheet, Text, View, Dimensions, TextInput, Button } from 'react-native';
import SyncStorage from 'sync-storage';
function App({navigation}) {  
  const[Username,setname]=useState('');
  return (
    <View style={Style.container}>
      <Appbar Title="Home"/>
    </View>
  );
}
function LoginScreenUser({navigation}){
  return(
    <Login flag="1" navigation={navigation}/>
  );
}
function LoginScreenAgent({navigation}){
  return(
    <Login flag="2" navigation={navigation}/>
  );
}
function LoginScreenRest({navigation}){
  return(
    <Login flag="3" navigation={navigation}/>
  );
}
const Stack = createStackNavigator();
function MyStack(){
  const [initroute,setInit]=useState('Startup');
  useEffect(()=>{
    if(SyncStorage.get("RestDetails")){
      setInit('Restaurant_home');
    }
    else if(SyncStorage.get("CustDetails")){
      setInit('Customer_home');
    }
    else if(SyncStorage.get("AgentDetails")){
      setInit('Agent_home');
    }
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initroute} screenOptions={{headerShown:false}}>        
        <Stack.Screen
          name="Home"
          component={App}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Startup" component={Start}/>
        <Stack.Screen name="SignupUser" component={SignupCustomer}/>
        <Stack.Screen name="SignupRest" component={SignupRestaurant}/>
        <Stack.Screen name="SignUpAgent" component={AgentSignup}/>
        <Stack.Screen name="Customer_home" component={HomePage}/>
        <Stack.Screen name="Restaurant_home" component={RestaurantHomePage}/>
        <Stack.Screen name="Agent_home" component={AgentHome}/>
        <Stack.Screen name="Tracking" component={Track}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;

