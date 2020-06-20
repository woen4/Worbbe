import React from 'react';
import service from '../../../assets/service.jpeg';
import agreementLottie from '../../../assets/contractLottie.json';
import LottieView from 'lottie-react-native';
import {ButtonNext, ButtonBack, ViewButtons, Title} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  TextButtonLight,
  TextButton,
  Container,
  w,
  h,
  Header,
  ButtonIcon,
  SmallText,
  TitleHeader,
} from '../../stylesShared';
import {Alert} from 'react-native';
//import background from '../../../assets/BackgroundChoose.png';

export default function Choose({navigation}) {
  let isClient = true;
  const alertAttention = () =>
    Alert.alert(
      'Atenção',
      'Você profissional irá solicitar o cadastro em nossa plataforma, e após isso entraremos em contato via telefone para a validação de suas habilidades como profissional e requisição de outros dados. Aguarde ser validado para fazer login em nossa plataforma.',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Register', {});
          },
        },
      ],
      {cancelable: true},
    );
  return (
    <Container>
      <Header>
        <ButtonIcon onPress={() => navigation.goBack()}>
          <Icon name="ios-arrow-back" size={28} color="#000084" />
        </ButtonIcon>
        <TitleHeader
          style={{
            marginLeft: w * 5,
          }}>
          Worbee
        </TitleHeader>
        <ButtonIcon
          style={{
            width: w * 11,
          }}
          onPress={() => navigation.navigate('Login')}>
          <SmallText>Entrar</SmallText>
        </ButtonIcon>
      </Header>
      <Title>Deseja usar nossa plataforma{'\n'}como:</Title>
      <LottieView
        style={{
          width: w * 40,
          height: h * 40,
          alignSelf: 'center',
          marginTop: '17%',
        }}
        source={agreementLottie}
        autoPlay
        loop
      />
      <ViewButtons>
        <ButtonBack
          onPress={() => {
            alertAttention();
          }}>
          <TextButtonLight>Profissional</TextButtonLight>
        </ButtonBack>
        <ButtonNext
          onPress={() => {
            navigation.navigate('Register', {isClient});
          }}>
          <TextButton>Cliente</TextButton>
        </ButtonNext>
      </ViewButtons>
    </Container>
  );
}
