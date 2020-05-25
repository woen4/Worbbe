import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {Menu} from 'react-native-paper';
import foto from '../../../assets/foto.jpg';
import Request from './request';
import {
  Container,
  ButtonFloat,
  ButtonIcon,
  TitleHeader,
  Header,
  SmallText,
} from '../../stylesGlobal';

import {FlatList, StyleSheet} from 'react-native';

export default function FeedRequests({navigation}) {
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

  let [menuVisible, setMenuVisible] = useState(false);
  let [menuFunnelVisible, setMenuFunnelVisible] = useState(false);

  return (
    <Container>
      <Header>
        <Menu
          visible={menuFunnelVisible}
          onDismiss={() => setMenuFunnelVisible(!menuFunnelVisible)}
          contentStyle={styles.ContentMenu}
          anchor={
            <Icon
              onPress={() => setMenuFunnelVisible(!menuFunnelVisible)}
              style={{marginLeft: 5}}
              name="md-funnel"
              size={25}
              color="#000084"
            />
          }>
          <Menu.Item title="Filtro por:" titleStyle={styles.TextMenu} />
          <Menu.Item title="Perfil" icon="star" titleStyle={styles.TextMenu} />

          <Menu.Item
            title="Proximidade"
            titleStyle={styles.TextMenu}
            icon="map-marker-distance"
          />
        </Menu>
        <TitleHeader>WorkGrid</TitleHeader>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(!menuVisible)}
          contentStyle={styles.ContentMenu}
          anchor={
            <Icon
              onPress={() => setMenuVisible(!menuVisible)}
              style={{marginRight: 5}}
              name="ios-more"
              size={29}
              color="#000084"
            />
          }>
          <Menu.Item
            onPress={() => navigation.navigate('ProfileHiredPublic')}
            title="Perfil"
            icon="account-details"
            titleStyle={styles.TextMenu}
          />

          <Menu.Item
            onPress={() => navigation.navigate('Help')}
            title="Ajuda"
            titleStyle={styles.TextMenu}
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

      <ButtonFloat
        onPress={() => navigation.navigate('ListServices')}
        style={{elevation: 8}}>
        <Icon2 name="tasks" size={32} color="#000084" />
      </ButtonFloat>
    </Container>
  );
}

const styles = StyleSheet.create({
  TextMenu: {
    fontFamily: 'SF Pro Display Bold',
  },
});
