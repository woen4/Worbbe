import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './screens/home/index';
import FeedRequests from './screens/hired/feedRequests/index';

const Routes = createAppContainer(createSwitchNavigator({Home, FeedRequests}));

export default Routes;
