import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Landing from '../pages/Landing';
import DreamTags from '../pages/DreamTags';
import CreateDream from '../pages/CreateDream';
import DreamNote from '../pages/DreamNote';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  const [isFirstEnter, setFirstEnter] = useState(true);
  
  useEffect(() => {
    async function getName() {
      const name = await AsyncStorage.getItem("@NAME")
      if(name){
        setFirstEnter(false)
      }
    }
    getName()
  }, [isFirstEnter])

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {/* {isFirstEnter 
        ?
        <Screen name="Login" component={Login} />
        :
        <> */}
          <Screen name="Landing" component={Landing} />
          <Screen name="DreamTags" component={DreamTags} />
          <Screen name="CreateDream" component={CreateDream} />
          <Screen name="DreamNote" component={DreamNote} />
        {/* </>
        } */}
      </Navigator>
    </NavigationContainer> 
  );
}

export default AppStack;