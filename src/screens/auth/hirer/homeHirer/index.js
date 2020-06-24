import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import UnitService from './unitService';
import Carousel from './carousel';
import {getServices} from '../../../../backend/firebase/homeHirerFB';
import agreement from '../../../../assets/agreement.png';
import {TextEmpty1, TextEmpty2} from './styles';
import {
  TitleHeader,
  Header,
  Container,
  MenuContainer,
  ButtonIcon,
  ItemMenu,
  TextItemMenu,
  DividerMenu,
  w,
  h,
} from '../../../stylesShared';
import {FlatList, RefreshControl, Image} from 'react-native';

export default function HomeHirer({navigation}) {
  const [services, setServices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  async function fillServices() {
    const response = await getServices();
    let count = 0;
    const array = [];
    response.forEach((item) => {
      array.push(item._data);
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
        <TitleHeader>Worbbe</TitleHeader>
        <ButtonIcon onPress={renderMenu}>
          <Icon name="ios-more" size={29} color="#000084" />
        </ButtonIcon>
      </Header>

      <Container onTouchEnd={menu ? () => setMenu() : () => {}}>
        <FlatList
          numColumns={2}
          ListHeaderComponent={Carousel}
          ListEmptyComponent={EmptyComponent}
          refreshControl={
            <RefreshControl
              colors={['#000099']}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          data={services}
          keyExtractor={(item) => item.serviceID}
          renderItem={({item}) => <UnitService item={item} />}
        />
        {menu}
      </Container>
    </>
  );
}

function EmptyComponent() {
  return (
    <>
      <TextEmpty1>O que está{'\n'}esperando?</TextEmpty1>
      <Image
        resizeMode="contain"
        style={{
          marginLeft: '-16%',
          alignSelf: 'center',
          width: w * 65,
          height: h * 50,
        }}
        source={agreement}
        autoPlay
        loop
      />
      <TextEmpty2>Peça seu{'\n'}primeiro serviço!</TextEmpty2>
    </>
  );
}
