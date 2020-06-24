import React, {useEffect} from 'react';
import service from '../../../assets/service.jpeg';
import logo from '../../../assets/LogoWGwithoutBorder.png';
import {TitleCards, ImgCard, ScrollCards, Logo, ViewImage} from './styles';
import {Container} from '../../stylesShared';
import {ScrollView, PermissionsAndroid} from 'react-native';

export default function Home({navigation}) {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }, []);
  return (
    <Container>
      <ScrollView>
        <ViewImage>
          <Logo source={logo} />
        </ViewImage>
        <ScrollCards>
          <TitleCards> Serviços Hidráulicos: </TitleCards>
          <ScrollView
            onTouchEnd={() => navigation.navigate('Choose')}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <ImgCard source={service} />
            <ImgCard source={service} />
            <ImgCard source={service} />
            <ImgCard source={service} />
            <ImgCard source={service} />
          </ScrollView>
        </ScrollCards>
      </ScrollView>
    </Container>
  );
}
