import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../assets/LogoWG.png';
import {} from './styles';
import {
  Container,
  ViewCenter,
  TextButton,
  TextButtonLigth,
  Input,
  ButtonLigth,
  ViewForm,
  ButtonTransparent,
} from '../stylesGlobal';

import {StyleSheet, View, KeyboardAvoidingView, Dimensions} from 'react-native';
const w = Dimensions.get('window').width / 100;
const h = Dimensions.get('window').height / 100;
const wh = (w * h) / 10;
export default function Home({navigation}) {
  Icon.loadFont();
  function handleLogin() {
    navigation.navigate('FeedRequests');
  }
  return (
    <Container>
      <ViewForm>
        <Input
          backgroundColor="rgba(0, 0, 131, 0.5)"
          placeholderTextColor="#fff"
          placeholderTextWeigth="bold"
          autoCorrect={false}
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Seu email"
        />
        <Input
          backgroundColor="rgba(0, 0, 131, 0.5)"
          placeholderTextColor="#fff"
          placeholderTextWeigth="bold"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Sua senha"
        />

        <View style={styles.ViewCBox}>
          <CheckBox
            tintColors={{true: '#000084', false: '#000084'}}
            disabled={false}
          />
          <TextButtonLigth style={styles.TextCBox}>
            Prestador de serviço
          </TextButtonLigth>
        </View>

        <ButtonLogin onPress={() => handleLogin()}>
          <TextButton>Login</TextButton>
        </ButtonLogin>
        <ButtonRegister>
          <TextButtonLigth>Cadastre-se</TextButtonLigth>
        </ButtonRegister>
        <ButtonLigth>
          <TextButtonLigth>
            <Icon name="google" size={18} color="red" />⠀ Logar com o google
          </TextButtonLigth>
        </ButtonLigth>
        <ButtonTransparent style={{marginTop: 20}}>
          <TextButtonLigth>Esqueceu sua senha?</TextButtonLigth>
        </ButtonTransparent>
      </ViewForm>
    </Container>
  );
}
const styles = StyleSheet.create({
  ViewCBox: {
    flexDirection: 'row',
    marginVertical: h * 2.5,
  },
  TextCBox: {
    fontSize: wh * 5,
    fontWeight: 'bold',
    color: '#000054',
    marginTop: h * 0.5,
  },
});
