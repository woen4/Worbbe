import React from 'react';
import {useAuth} from '../contexts/authContext';
import NoAuthRoutes from './noAuth.routes';
import HirerRoutes from './hirer.routes';
import HiredRoutes from './hired.routes';

const Routes = () => {
  const {user} = useAuth();

  if (user != null) {
    if (user.isClient === true) {
      return <HirerRoutes />;
    } else {
      return <HiredRoutes />;
    }
  } else {
    return <NoAuthRoutes />;
  }
};

export default Routes;
