import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Landing from '../pages/Landing'
import createDream from '../pages/DreamTags'

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="createDream" component={createDream} />
        <Screen name="Landing" component={Landing} />
      </Navigator>
    </NavigationContainer> 
  );
}

export default AppStack;