import React, {useRef, useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../../assets/LogoWG.png';
import google from '../../../assets/google.png';
import LinearGradient from 'react-native-linear-gradient';
import {Form} from '@unform/mobile';
import * as Animatable from 'react-native-animatable';
import Input from '../../unform/input';
import {validateLogin} from '../../../backend/validations';
import ToastDefault from '../../toasts';
import AuthContext from '../../../contexts/authContext';
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
} from './styles';

import {
  Container,
  TextButtonLight,
  ViewForm,
  s2,
  ViewInput,
  h,
  IosIconInput,
} from '../../stylesShared';

import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';

export default function Home({navigation}) {
  const {signed, fillContext} = useContext(AuthContext);
  const isClient = true;
  const formRef = useRef(null);

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
  const alertConfirmation = () =>
    Alert.alert(
      'Realizar cadastro como:',
      '',
      [
        {
          text: 'Profissional',
          onPress: () => {
            alertAttention();
          },
        },
        {
          text: 'Cliente',
          onPress: () => {
            navigation.navigate('Register', {isClient});
          },
        },
      ],
      {cancelable: true},
    );

  async function handleLogin(data) {
    if (validateLogin(data) === true) {
      let response = await fillContext(data);
      ToastDefault(response);
    } else {
      ToastDefault(validateLogin(data));
    }
  }

  return (
    <Container>
      <KeyboardAvoidingView>
        <ScrollView>
          <ViewForm style={{elevation: 10, marginTop: h * 23}}>
            <TitleForm>LOGIN</TitleForm>
            <Form ref={formRef} onSubmit={handleLogin}>
              <ViewInput>
                <Input
                  style={styles.input}
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
                <IosIconInput name="ios-mail" size={28} color="#fff" />
              </ViewInput>
              <ViewInput>
                <Input
                  style={styles.input}
                  name="password"
                  backgroundColor="rgba(0, 0, 131, 0.5)"
                  placeholderTextColor="#fff"
                  placeholderTextWeigth="bold"
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholder="Sua senha"
                />
                <IosIconInput name="ios-lock" size={28} color="#fff" />
              </ViewInput>
            </Form>

            <ButtonLogin onPress={() => formRef.current.submitForm()}>
              <TextButtonLight>Login</TextButtonLight>
            </ButtonLogin>

            <SmallTextWithMargin>
              Não tem uma conta?
              <SmallTextRegister
                onPress={alertConfirmation}
                style={{color: '#000084', fontSize: s2}}>
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
                <LogoGoogle style={{resizeMode: 'contain'}} source={google} />
              </ButtonLoginSocial>
            </ViewSocial>
          </ViewForm>
          <LinearGradient
            colors={['#000054', '#000074', '#000094']}
            style={styles.ViewGradient}>
            <Logo style={{resizeMode: 'contain'}} source={logo} />
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
const styles = StyleSheet.create({
  ViewGradient: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: h * 30,
    width: '100%',
    backgroundColor: '#000054',
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 80,
    paddingLeft: 30,
  },
  input: {
    borderRadius: 40,
    height: h * 6,
    paddingLeft: 40,
    width: '92%',
    color: '#fff',
    fontSize: s2,
    textAlignVertical: 'top',
    marginBottom: '4%',
    fontFamily: 'SF Pro Display Bold',
    backgroundColor: 'rgba(0, 0, 131, 0.5)',
  },
});
