import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FeedRequests from '../screens/auth/hired/feedRequests/index';
import ListServices from '../screens/auth/hired/listServices/index';
import ProfileHired from '../screens/auth/hired/profile/index';
import ProfileHiredPublic from '../screens/auth/hired/profile/profilePublic';
import Chat from '../screens/auth/chat/index';
import Help from '../screens/auth/help/index';
import HomeHirer from '../screens/auth/hirer/homeHirer/index';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="FeedRequests" component={FeedRequests} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
