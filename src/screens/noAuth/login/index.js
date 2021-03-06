import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../../assets/LogoWG.png';
import google from '../../../assets/google.png';
import ProgressLottie from '../../../assets/progressLottie.json';
import {Form} from '@unform/mobile';
import Input from '../../unform/input';
import {validateLogin} from '../../../backend/validations';
import ToastDefault from '../../toasts';
import {useAuth} from '../../../contexts/authContext';
import {LottieLoading} from '../../lottieLoading';

import {
  TitleForm,
  Logo,
  LogoGoogle,
  SmallTextRegister,
  SmallTextWithMargin,
  ViewOR,
  HalfDivider,
  SmallTextOR,
  ViewSocial,
  ButtonLogin,
  ButtonLoginSocial,
  HeaderGradientLogin,
  ViewFormLogin,
} from './styles';

import {Container, TextButtonLight} from '../../stylesShared';

import {KeyboardAvoidingView, ScrollView, Alert} from 'react-native';

export default function Home({navigation}) {
  const {fillContext} = useAuth();
  const [modalLoading, setModalLoading] = useState(false);
  const isClient = true;
  const formRef = useRef(null);

  async function handleLogin(data) {
    if (validateLogin(data) === true) {
      setModalLoading(true);
      await fillContext(data);
      setModalLoading(false);
    } else {
      ToastDefault(validateLogin(data));
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView>
        <ScrollView>
          <ViewFormLogin>
            <TitleForm>Worbbe</TitleForm>
            <Form ref={formRef} onSubmit={handleLogin}>
              <Input
                label="0"
                icon="ios-mail"
                iconFamily="Ionicons"
                iconSize={25}
                name="email"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                placeholderTextColor="#fff"
                placeholderTextWeigth="bold"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Seu email"
              />
              <Input
                label="0"
                icon="ios-lock"
                iconFamily="Ionicons"
                iconSize={25}
                name="password"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                placeholderTextColor="#fff"
                placeholderTextWeigth="bold"
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Sua senha"
              />
            </Form>

            <ButtonLogin onPress={() => formRef.current.submitForm()}>
              <TextButtonLight>Entrar</TextButtonLight>
            </ButtonLogin>

            <SmallTextWithMargin>
              Não tem uma conta?
              <SmallTextRegister
                onPress={() => {
                  navigation.navigate('Choose');
                }}>
                {' '}
                Cadastre-se
              </SmallTextRegister>
            </SmallTextWithMargin>

            <SmallTextWithMargin>Esqueceu sua senha?</SmallTextWithMargin>
            <ViewOR>
              <HalfDivider />
              <ButtonLoginSocial>
                <SmallTextOR>OU</SmallTextOR>
              </ButtonLoginSocial>
              <HalfDivider />
            </ViewOR>
            <ViewSocial>
              <ButtonLoginSocial>
                <Icon name="facebook" size={24} color="#101099" />
              </ButtonLoginSocial>

              <ButtonLoginSocial>
                <LogoGoogle source={google} />
              </ButtonLoginSocial>
            </ViewSocial>
          </ViewFormLogin>
          <HeaderGradientLogin colors={['#000054', '#000074', '#000094']}>
            <Logo source={logo} />
          </HeaderGradientLogin>
        </ScrollView>
      </KeyboardAvoidingView>
      <LottieLoading visible={modalLoading} source={ProgressLottie} size={9} />
    </Container>
  );
}
