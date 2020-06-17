import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import foto from '../../../../assets/foto.jpg';
import UnitService from './unitService';
import Carousel from './carousel';
import {getServices} from '../../../../backend/firebase/homeHirerFB';

import {
  TitleHeader,
  Header,
  Container,
  MenuContainer,
  ButtonIcon,
  ItemMenu,
  TextItemMenu,
  DividerMenu,
} from '../../../stylesShared';
import {FlatList, RefreshControl} from 'react-native';

export default function HomeHirer({navigation}) {
  const [services, setServices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function fillServices() {
    const response = await getServices();
    let count = 0;
    const array = [];
    response.forEach((item) => {
      array.push(item._data);
      array[count].id = count;
      count = count + 1;
    });
    setServices(array);
  }
  useEffect(() => {
    fillServices();
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      fillServices();
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  const [menu, setMenu] = useState(null);

  function renderMenu() {
    setMenu(
      <MenuContainer animation="bounceInRight" duration={900}>
        <ItemMenu
          onPress={() => {
            navigation.navigate('ProfileHirer');
          }}>
          <Icon name="ios-contact" size={26} color="#000054" />
          <TextItemMenu>Perfil</TextItemMenu>
        </ItemMenu>
        <DividerMenu />
        <ItemMenu
          onPress={() => {
            navigation.navigate('Addresses');
          }}>
          <Icon name="md-pin" size={26} color="#000054" />
          <TextItemMenu>Endereços</TextItemMenu>
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

  return (
    <>
      <Header>
        <ButtonIcon onPress={() => navigation.navigate('AddService')}>
          <Icon name="md-add-circle-outline" size={26} color="#000084" />
        </ButtonIcon>
        <TitleHeader>WorkGrid</TitleHeader>
        <ButtonIcon onPress={renderMenu}>
          <Icon name="ios-more" size={29} color="#000084" />
        </ButtonIcon>
      </Header>

      <Container onTouchEnd={menu ? () => setMenu() : () => {}}>
        <FlatList
          numColumns={2}
          ListHeaderComponent={Carousel}
          refreshControl={
            <RefreshControl
              colors={['#000099']}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          data={services}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <UnitService item={item} />}
        />
        {menu}
      </Container>
    </>
  );
}
