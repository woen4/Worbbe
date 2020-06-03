import React from 'react';
import Routes from './routes/routesManager';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './contexts/authContext';
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
