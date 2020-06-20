import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/noAuth/home/index';
import Login from '../screens/noAuth/login/index';
import Register from '../screens/noAuth/register/index';
import Help from '../screens/auth/help/index';
import Choose from '../screens/noAuth/choose/index';

const NoAuthStack = createStackNavigator();

const NoAuthRoutes = () => (
  <NoAuthStack.Navigator>
    <NoAuthStack.Screen
      options={{headerShown: false}}
      name="Home"
      component={Home}
    />
    <NoAuthStack.Screen
      options={{headerShown: false}}
      name="Choose"
      component={Choose}
    />
    <NoAuthStack.Screen
      options={{headerShown: false}}
      name="Login"
      component={Login}
    />
    <NoAuthStack.Screen
      name="Help"
      component={Help}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="Register"
      component={Register}
      options={{headerShown: false}}
    />
  </NoAuthStack.Navigator>
);

export default NoAuthRoutes;
