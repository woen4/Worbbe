import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import foto from '../../../../assets/foto.jpg';
import Request from './request';
import AuthContext from '../../../../contexts/authContext';
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

import {FlatList} from 'react-native';

export default function FeedRequests({navigation}) {
  let ExamplePosts = [
    {
      id: '123',
      Type: 'Limpeza',
      NameHirer: 'Kaio Woen',
      PhotoHirer: foto,
      Distance: '5km',
      Date: '10/05/19',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra congue tristique. Etiam tempor mollis lacus, vel fermentum ex dapibus et. Pellentesque sed iaculis mi, sit amet fermentum quam. ',
      Time: '16:00',
      Price: '50,00',
    },
    {
      id: '323',
      Type: 'Limpeza',
      NameHirer: 'Kaio Woen',
      PhotoHirer: foto,
      Distance: '5km',
      Date: '10/05/19',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra congue tristique. Etiam tempor mollis lacus, vel fermentum ex dapibus et. Pellentesque sed iaculis mi, sit amet fermentum quam.',
      Time: '16:00',
      Price: '50,00',
    },
    {
      id: '223',
      Type: 'Limpeza',
      NameHirer: 'Kaio Woen',
      PhotoHirer: foto,
      Distance: '5km',
      Date: '10/05/19',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra congue tristique. Etiam tempor mollis lacus, vel fermentum ex dapibus et. Pellentesque sed iaculis mi, sit amet fermentum quam.',
      Time: '16:00',
      Price: '50,00',
    },
  ];
  const {user} = useContext(AuthContext);
  console.log(user);
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
        <ItemMenu
          onPress={() => {
            navigation.navigate('ProfileHired');
          }}>
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
        <TitleHeader>WorkGrid</TitleHeader>
        <ButtonIcon onPress={renderMenu}>
          <Icon name="ios-more" size={29} color="#000084" />
        </ButtonIcon>
      </Header>

      <Container onTouchEnd={closeMenus}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ExamplePosts}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Request service={item} />}
        />

        <ButtonFloat
          onPress={() => navigation.navigate('ListServices')}
          style={{elevation: 8}}>
          <Icon name="ios-list" size={34} color="#000084" />
        </ButtonFloat>
        {menu}
      </Container>
    </>
  );
}
