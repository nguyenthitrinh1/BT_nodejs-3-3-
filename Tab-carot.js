import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeCarot from './HomeScreen-carot';
import Explore from './Explo-carot';
import Cartcarot from './Cart-carot';
import Favourite from './Favorate-carot';
import Account from './Account-carot';
import SearchScreen from'./Search-carot';
const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused
                ? require('./assets/images/store 1.png')
                : require('./assets/images/store 1 (1).png');
              break;
            case 'Explore':
              iconSource = focused
                ? require('./assets/images/Group 3.png')
                : require('./assets/images/Group 7.png');
              break;
            case 'Cart':
              iconSource = focused
                ? require('./assets/images/Vector (1).png')
                : require('./assets/images/Vector.png');
              break;
            case 'Favourite':
              iconSource = require('./assets/images/bookmark 1.png');
              break;
            case 'Account':
              iconSource = require('./assets/images/user 1.png');
              break;
          }

          return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeCarot} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cartcarot} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Search" component={SearchScreen}/>
    </Tab.Navigator>
  );
}
