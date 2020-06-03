import React, {useContext} from 'react';
import AuthContext from '../contexts/authContext';
import NoAuthRoutes from './noAuth.routes';
import HirerRoutes from './hirer.routes';
import HiredRoutes from './hired.routes';

const Routes = () => {
  const {signed, user} = useContext(AuthContext);
  if (user === null) {
    return <NoAuthRoutes />;
  } else {
    if (user._data.isClient === true) {
      return <HirerRoutes />;
    } else {
      return <HiredRoutes />;
    }
  }
};

export default Routes;
