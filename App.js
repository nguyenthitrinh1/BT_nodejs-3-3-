import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Phonenumber from './Phonenumber';
import Verification from './Verification';
import SelectLocation from './SelectLocation';
import Login from './Login-carot';
import SignUp from './Sign-up-carot';
import ProductDetail from './Product-detail-carot';
import Beverages from './Berages-carot';
import MainTabs from './Tab-carot';
import SearchScreen from'./Search-carot';
import FilterScreen from './Filter-carot';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneNumber">
        <Stack.Screen name="PhoneNumber" component={Phonenumber} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Beverages" component={Beverages} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}