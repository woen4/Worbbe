import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileHiredPublic from '../screens/auth/hired/profile/profilePublic';
import Chat from '../screens/auth/chat/index';
import HomeHirer from '../screens/auth/hirer/homeHirer/index';
import ProfileHirer from '../screens/auth/hirer/profile/index';
import Addresses from '../screens/auth/hirer/addresses/index';
import AddService from '../screens/auth/hirer/addService/index';
import AddAddressMap from '../screens/auth/hirer/addresses/addAdressMap';
import AddAddressDetails from '../screens/auth/hirer/addresses/addAdressDetails';
import DetailsService from '../screens/auth/detailsService/index';
import Help from '../screens/auth/help/index';

const HirerStack = createStackNavigator();

const AuthRoutes = () => (
  <HirerStack.Navigator>
    <HirerStack.Screen
      name="HomeHirer"
      component={HomeHirer}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="ProfileHiredPublic"
      component={ProfileHiredPublic}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="Chat"
      component={Chat}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="ProfileHirer"
      component={ProfileHirer}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="Addresses"
      component={Addresses}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="AddService"
      component={AddService}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="AddAddressMap"
      component={AddAddressMap}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="AddAddressDetails"
      component={AddAddressDetails}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="DetailsService"
      component={DetailsService}
      options={{headerShown: false}}
    />
    <HirerStack.Screen
      name="Help"
      component={Help}
      options={{headerShown: false}}
    />
  </HirerStack.Navigator>
);

export default AuthRoutes;
