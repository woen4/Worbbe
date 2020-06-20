import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FeedRequests from '../screens/auth/hired/feedRequests/index';
import ListServices from '../screens/auth/hired/listServices/index';
import ProfileHired from '../screens/auth/hired/profile/index';
import Chat from '../screens/auth/chat/index';
//import DetailsService from '../screens/auth/detailsService/hired';
import Help from '../screens/auth/help/index';

const HiredStack = createStackNavigator();

const AuthRoutes = () => (
  <HiredStack.Navigator>
    <HiredStack.Screen
      name="FeedRequests"
      component={FeedRequests}
      options={{headerShown: false}}
    />
    <HiredStack.Screen
      name="ListServices"
      component={ListServices}
      options={{headerShown: false}}
    />
    <HiredStack.Screen
      name="ProfileHired"
      component={ProfileHired}
      options={{headerShown: false}}
    />

    <HiredStack.Screen
      name="Chat"
      component={Chat}
      options={{headerShown: false}}
    />
    <HiredStack.Screen
      name="Help"
      component={Help}
      options={{headerShown: false}}
    />
  </HiredStack.Navigator>
);

export default AuthRoutes;
