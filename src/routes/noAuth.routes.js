import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/noAuth/home/index';
import Login from '../screens/noAuth/login/index';

import FeedRequests from '../screens/auth/hired/feedRequests/index';
import ListServices from '../screens/auth/hired/listServices/index';
import ProfileHired from '../screens/auth/hired/profile/index';
import ProfileHiredPublic from '../screens/auth/hired/profile/profilePublic';
import Chat from '../screens/auth/chat/index';
import Help from '../screens/auth/help/index';
import HomeHirer from '../screens/auth/hirer/homeHirer/index';
import ProfileHirer from '../screens/auth/hirer/profile/index';
import Addresses from '../screens/auth/hirer/addresses/index';
import AddService from '../screens/auth/hirer/addService/index';
import AddAddressMap from '../screens/auth/hirer/addresses/addAdressMap';
import AddAddressDetails from '../screens/auth/hirer/addresses/addAdressDetails';
import DetailsService from '../screens/auth/detailsService/index';
import RegisterHirer from '../screens/noAuth/register/registerHirer';
import RegisterHired from '../screens/noAuth/register/registerHired';

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
      name="Login"
      component={Login}
    />
    <NoAuthStack.Screen
      name="FeedRequests"
      component={FeedRequests}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="ListServices"
      component={ListServices}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="ProfileHired"
      component={ProfileHired}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="ProfileHiredPublic"
      component={ProfileHiredPublic}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="Chat"
      component={Chat}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="Help"
      component={Help}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="HomeHirer"
      component={HomeHirer}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="ProfileHirer"
      component={ProfileHirer}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="Addresses"
      component={Addresses}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="AddService"
      component={AddService}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="AddAddressMap"
      component={AddAddressMap}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="AddAddressDetails"
      component={AddAddressDetails}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="DetailsService"
      component={DetailsService}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="RegisterHirer"
      component={RegisterHirer}
      options={{headerShown: false}}
    />
    <NoAuthStack.Screen
      name="RegisterHired"
      component={RegisterHired}
      options={{headerShown: false}}
    />
  </NoAuthStack.Navigator>
);

export default NoAuthRoutes;
