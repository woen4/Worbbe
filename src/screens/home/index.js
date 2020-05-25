import React from 'react';
import service from '../../assets/service.jpeg';
import logo from '../../assets/LogoWG.png';
import {TitleCards, ImgCard, ScrollCards, Logo, ViewImage} from './styles';
import {Container} from '../stylesGlobal';
import {ScrollView} from 'react-native';

export default function Home({navigation}) {
  function handleLogin() {
    navigation.navigate('Login');
  }
  return (
    <Container>
      <ScrollView>
        <ViewImage>
          <Logo style={{resizeMode: 'contain'}} source={logo} />
        </ViewImage>
        <ScrollCards style={{elevation: 10}}>
          <TitleCards> Serviços Hidráulicos: </TitleCards>
          <ScrollView
            onTouchEnd={handleLogin}
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
