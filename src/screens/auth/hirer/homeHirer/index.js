import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import service from '../../../../assets/service.jpeg';
import foto from '../../../../assets/foto.jpg';
import Carousel from 'react-native-snap-carousel';
import Service from '../../components/unitService/index';
import {
  TitleHeader,
  Header,
  Container,
  w,
  MenuContainer,
  ButtonIcon,
  ItemMenu,
  TextItemMenu,
  DividerMenu,
} from '../../../stylesShared';
import {FlatList} from 'react-native';
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

  let [menu, setMenu] = useState(null);

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
        {menu}
      </Container>
    </>
  );
}
