import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Landing from '../pages/Landing';
import DreamTags from '../pages/DreamTags';
import CreateDream from '../pages/CreateDream'

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="DreamTags" component={DreamTags} />
        <Screen name="CreateDream" component={CreateDream} />
        <Screen name="Landing" component={Landing} />
      </Navigator>
    </NavigationContainer> 
  );
}

export default AppStack;