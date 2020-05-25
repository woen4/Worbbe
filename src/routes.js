import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './screens/home/index';
import Login from './screens/login/index';
import FeedRequests from './screens/hired/feedRequests/index';
import ListServices from './screens/hired/listServices/index';
import ProfileHired from './screens/hired/profile/index';
import ProfileHiredPublic from './screens/hired/profile/profilePublic';

import Chat from './screens/chat/index';
import Help from './screens/hired/help/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Login,
    FeedRequests,
    ListServices,
    ProfileHired,
    Chat,
    Help,
    ProfileHiredPublic,
  }),
);

export default Routes;
