import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import foto from '../../../../assets/foto.jpg';
import UnitService from './unitService';
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
import {FlatList, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {
  ViewCarousel,
  ImageCarousel,
  ViewDot,
  ItemCarousel,
  TextDot,
} from './styles';

export default function HomeHirer({navigation}) {
  const ExampleServices = [
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
      id: 0,
      image:
        'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
    },
    {
      id: 1,
      image:
        'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
    },
    {
      id: 2,
      image:
        'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
    },
    {
      id: 3,
      image:
        'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
    },
    {
      id: 4,
      image:
        'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
    },
    {
      id: 5,
      image:
        'https://image.freepik.com/vetores-gratis/banner-isometrica-horizontal-on-line-profissional-servico-de-encanador-com-dois-tecnicos-de-fixacao-ilustracao-em-vetor-pia-banheiro_1284-30481.jpg',
    },
  ];

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

  function HeaderComponentFlatList() {
    const [active, setActive] = useState(0);
    const {width} = Dimensions.get('window');

    const changeDot = ({nativeEvent}) => {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != active) {
        setActive(slide);
      }
    };
    return (
      <>
        <ViewCarousel>
          <ScrollView
            onScroll={changeDot}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled>
            {itemsCarousel.map((item, index) => (
              <ItemCarousel>
                <ImageCarousel
                  key={index}
                  source={{uri: item.image}}
                  resizeMode="stretch"
                />
              </ItemCarousel>
            ))}
          </ScrollView>
          <ViewDot>
            {itemsCarousel.map((item, k) => (
              <TextDot
                key={k}
                style={k === active ? styles.dot : styles.dotActive}>
                ⬤
              </TextDot>
            ))}
          </ViewDot>
        </ViewCarousel>
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
        <FlatList
          numColumns={2}
          ListHeaderComponent={HeaderComponentFlatList}
          showsVerticalScrollIndicator={false}
          data={ExampleServices}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <UnitService />}
        />

        {menu}
      </Container>
    </>
  );
}
const styles = StyleSheet.create({
  dot: {
    color: '#000074',
  },
  dotActive: {
    color: 'rgba(0, 0, 94, 0.2)',
  },
});
