import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import service from '../../../../assets/service.jpeg';
import foto from '../../../../assets/foto.jpg';
import Carousel from 'react-native-snap-carousel';
import {Menu} from 'react-native-paper';
import Service from '../../components/unitService/index';
import {
  TitleHeader,
  Header,
  Container,
  w,
  ButtonIcon,
} from '../../../stylesShared';
import {StyleSheet, FlatList} from 'react-native';
import {
  ViewCarousel,
  ImageCarousel,
  TitleItemCarousel,
  TitleCarousel,
  ItemCarousel,
  ViewListServices,
  TitleList,
} from './styles';

export default function HomeHirer({navigation}) {
  let [menuVisible, setMenuVisible] = useState(false);

  let ExampleServices = [
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
    {
      id: '623',
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
      id: '3213',
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
      id: '728',
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
      id: '673',
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
      id: '611',
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

  const itemsCarousel = [
    {
      image: service,
      title: 'Limpeza',
    },
    {
      image: service,
      title: 'Limpeza',
    },
    {
      image: service,
      title: 'Limpeza',
    },
    {
      image: service,
      title: 'Limpeza',
    },
    {
      image: service,
      title: 'Limpeza',
    },
    {
      image: service,
      title: 'Limpeza',
    },
  ];

  function HeaderComponentFlatList() {
    function renderItem({item}) {
      return (
        <ItemCarousel>
          <ImageCarousel source={item.image} resizeMode="cover" />
          <TitleItemCarousel>{item.title}</TitleItemCarousel>
        </ItemCarousel>
      );
    }
    return (
      <>
        <Header>
          <ButtonIcon onPress={() => navigation.navigate('AddService')}>
            <Icon name="md-add-circle-outline" size={26} color="#000084" />
          </ButtonIcon>
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
              onPress={() => {
                navigation.navigate('ProfileHirer');
                setMenuVisible(false);
              }}
              title="Perfil"
              icon="account-details"
              titleStyle={styles.TextMenu}
            />

            <Menu.Item
              onPress={() => {
                navigation.navigate('Help');
                setMenuVisible(false);
              }}
              title="Suporte"
              titleStyle={styles.TextMenu}
              icon="help-circle-outline"
            />
            <Menu.Item
              onPress={() => {
                navigation.navigate('Addresses');
                setMenuVisible(false);
              }}
              title="Endereços"
              titleStyle={styles.TextMenu}
              icon="map-marker-multiple"
            />
          </Menu>
        </Header>
        <TitleCarousel>Mais populares:</TitleCarousel>
        <ViewCarousel>
          <Carousel
            layout={'default'}
            data={itemsCarousel}
            sliderWidth={w * 103}
            itemWidth={w * 65}
            renderItem={renderItem}
          />
        </ViewCarousel>

        <TitleList>Seus serviços:</TitleList>
      </>
    );
  }

  return (
    <Container>
      <ViewListServices>
        <FlatList
          ListHeaderComponent={HeaderComponentFlatList()}
          showsVerticalScrollIndicator={false}
          data={ExampleServices}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Service
              nameResponsible={item.NameHirer}
              service={item}
              icon="chat"
            />
          )}
        />
      </ViewListServices>
    </Container>
  );
}

const styles = StyleSheet.create({
  TextMenu: {
    fontFamily: 'SF Pro Display Bold',
  },
});
