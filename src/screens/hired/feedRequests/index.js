import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as PaperProvider, Menu} from 'react-native-paper';
import foto from '../../../assets/foto.jpg';
import Request from './request';
import {
  Container,
  ButtonFloat,
  IconTransparent,
  TitleHeader,
  Header,
} from '../../stylesGlobal';

import {FlatList} from 'react-native';

export default function FeedRequests() {
  const ExamplePosts = [
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
  const theme = {
    colors: {
      primary: '#000084',
      accent: '#000054',
    },
    fonts: {
      medium: 'bold',
    },
  };
  let [menuVisible, setMenuVisible] = useState(false);
  function closeMenu() {
    setMenuVisible(false);
  }

  function openMenu() {
    setMenuVisible(true);
  }

  return (
    <PaperProvider>
      <Container>
        <Header>
          <IconTransparent>
            <Icon2 name="filter-variant" size={28} color="#000084" />
          </IconTransparent>

          <TitleHeader>WorkGrid</TitleHeader>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <IconTransparent
                style={{width: '100%', marginRight: 15}}
                onPress={openMenu}>
                <Icon name="ellipsis-v" size={20} color="#000084" />
              </IconTransparent>
            }>
            <Menu.Item
              theme={{color: theme.colors.primary}}
              onPress={() => {}}
              title="Perfil"
              icon="account-circle-outline"
            />
            <Menu.Item
              onPress={() => {}}
              title="Ajuda"
              icon="help-circle-outline"
            />
          </Menu>
        </Header>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ExamplePosts}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Request service={item} />}
        />

        <ButtonFloat style={{elevation: 8}}>
          <Icon name="tasks" size={32} color="#000084" />
        </ButtonFloat>
      </Container>
    </PaperProvider>
  );
}
