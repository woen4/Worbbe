import React, {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Request from './request';
import {useAuth} from '../../../../contexts/authContext';
import auth from '@react-native-firebase/auth';
import {
  getRequests,
  acceptRequest,
} from '../../../../backend/firebase/feedRequestsFB';
import {
  Container,
  ButtonFloat,
  TitleHeader,
  Header,
  MenuContainer,
  TextItemMenu,
  ItemMenu,
  DividerMenu,
  ButtonIcon,
  MenuContainerLeft,
} from '../../../stylesShared';

import {Divider} from './styles';

import {FlatList} from 'react-native';

export default function FeedRequests({navigation}) {
  const {user} = useAuth();
  let flag = false;
  const [requests, setRequests] = useState();
  const [refreshing, setRefreshing] = useState(true);

  async function fillRequests() {
    const response = await getRequests(user.fieldHired);
    setRequests(filterRequests(response));
  }

  const handleAcceptRequest = async function (serviceID) {
    if (flag === false) {
      flag = true;
      console.log('foi11111');
      await acceptRequest(serviceID, user.name, user.avatarUrl);
      let i;
      const newRequests = requests;
      for (i = 0; i < requests.length; i++) {
        if (newRequests[i]._data.serviceID === serviceID) {
          newRequests.splice(i, 1);
        }
      }
      setRequests(newRequests);
      setRefreshing(!refreshing);
      flag = false;
    }
  };

  const filterRequests = useCallback((requestsFunction) => {
    const {email} = auth().currentUser;
    const newRequests = [];
    let i = 0,
      j = 0;
    for (i = 0; i < requestsFunction.length; i++) {
      if (requestsFunction[i]._data.hireds.length !== 0) {
        for (j = 0; j < requestsFunction[i]._data.hireds.length; j++) {
          if (requestsFunction[i]._data.hireds[j] !== email) {
            newRequests.push(requestsFunction[i]);
          }
        }
      } else {
        newRequests.push(requestsFunction[i]);
      }
    }
    return newRequests;
  }, []);

  useEffect(() => {
    fillRequests();
  }, []);

  const [menu, setMenu] = useState(null);
  const [funnel, setFunnel] = useState(null);

  function closeMenus() {
    setMenu();
    setFunnel();
  }

  function renderMenu() {
    setMenu(
      <MenuContainer animation="bounceInRight" duration={900}>
        <ItemMenu
          onPress={() => {
            navigation.navigate('ProfileHired');
          }}>
          <Icon name="ios-contact" size={26} color="#000054" />
          <TextItemMenu>Perfil</TextItemMenu>
        </ItemMenu>
        <DividerMenu />
        <ItemMenu
          onPress={() => {
            navigation.navigate('Help');
          }}>
          <Icon name="ios-help" size={40} color="#000054" />
          <TextItemMenu>Ajuda</TextItemMenu>
        </ItemMenu>
      </MenuContainer>,
    );
  }

  function renderMenuFunnel() {
    setMenu(
      <MenuContainerLeft animation="bounceInLeft" duration={900}>
        <ItemMenu>
          <TextItemMenu>Filtrar por:</TextItemMenu>
        </ItemMenu>
        <ItemMenu onPress={() => {}}>
          <Icon2 name="map-marker-distance" size={26} color="#000054" />
          <TextItemMenu>Proximidade</TextItemMenu>
        </ItemMenu>
        <DividerMenu />
        <ItemMenu onPress={() => {}}>
          <Icon2 name="alert-decagram-outline" size={27} color="#000054" />
          <TextItemMenu>Urgência</TextItemMenu>
        </ItemMenu>
      </MenuContainerLeft>,
    );
  }

  return (
    <>
      <Header>
        <ButtonIcon onPress={renderMenuFunnel}>
          <Icon name="md-funnel" size={26} color="#000084" />
        </ButtonIcon>
        <TitleHeader>Worbbe</TitleHeader>
        <ButtonIcon onPress={renderMenu}>
          <Icon name="ios-more" size={29} color="#000084" />
        </ButtonIcon>
      </Header>

      <Container onTouchEnd={closeMenus}>
        <FlatList
          ItemSeparatorComponent={() => {
            return <Divider />;
          }}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          data={requests}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <Request service={item._data} acceptRequest={handleAcceptRequest} />
          )}
        />

        <ButtonFloat onPress={() => navigation.navigate('ListServices')}>
          <Icon name="ios-list" size={34} color="#000084" />
        </ButtonFloat>
        {menu}
      </Container>
    </>
  );
}
