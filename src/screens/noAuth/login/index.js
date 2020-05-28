import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Icon2 from 'react-native-vector-icons/Ionicons';
import logo from '../../../assets/LogoWG.png';
import google from '../../../assets/google.png';
import LinearGradient from 'react-native-linear-gradient';
import {Form} from '@unform/mobile';
import Input from '../../unform/input';

import {
  TitleForm,
  Logo,
  LogoGoogle,
  SmallTextRegister,
  SmallTextWithMargin,
  ViewOR,
  HalfDivider,
  SmallTextOR,
  IconFB,
  SmallTextGG,
  ViewSocial,
} from './styles';

import {
  Container,
  TextButtonLight,
  ButtonLight,
  ViewForm,
  SmallText,
  s2,
  ViewInput,
  h,
  w,
  IosIconInput,
  ButtonIcon,
  ViewModal,
  ButtonModal,
  TextButtonModal,
} from '../../stylesShared';

import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';

export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [hiredCheck, setHiredCheck] = useState(false);
  const [iconCheck, seticonCheck] = useState('ios-radio-button-off');

  function managerModal() {
    setModalVisible(!modalVisible);
  }
  function closeModal() {
    setModalVisible(false);
  }

  function handleHiredCheck() {
    setHiredCheck(!hiredCheck);
    hiredCheck
      ? seticonCheck('ios-radio-button-off')
      : seticonCheck('ios-checkmark-circle-outline');
  }

  function handleLogin() {
    hiredCheck
      ? navigation.navigate('FeedRequests')
      : navigation.navigate('HomeHirer');
  }

  function navigateInModal() {
    managerModal();
    navigation.navigate('RegisterHirer');
  }

  const alertConfirmation = () =>
    Alert.alert(
      '',
      'Realizar cadastro como:',
      [
        {
          text: 'Profissional',
          onPress: () => navigation.navigate('RegisterHired'),
        },
        {
          text: 'Cliente',
          onPress: () => navigation.navigate('RegisterHirer'),
          style: 'cancel',
        },
        ,
      ],
      {cancelable: true},
    );

  return (
    <Container>
      <KeyboardAvoidingView>
        <ScrollView>
          <ViewForm style={{elevation: 10, marginTop: h * 23}}>
            <TitleForm>LOGIN</TitleForm>

            <Form>
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
            <View style={styles.ViewCBox}>
              <ButtonIcon onPress={handleHiredCheck}>
                <Icon2 name={iconCheck} size={24} color="#000084" />
              </ButtonIcon>
              <SmallText>Prestador de serviço</SmallText>
            </View>

            <ButtonLight onPress={handleLogin}>
              <TextButtonLight>Login</TextButtonLight>
            </ButtonLight>

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
              <SmallTextOR style={{textAlignVertical: 'center'}}>
                OU
              </SmallTextOR>
              <HalfDivider />
            </ViewOR>
            <ViewSocial>
              <IconFB name="facebook" size={24} color="#101099" />
              <SmallTextGG>
                <LogoGoogle style={{resizeMode: 'contain'}} source={google} />
              </SmallTextGG>
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
  ViewCBox: {
    flexDirection: 'row',
    marginBottom: h * 4.5,
    marginTop: h * 1,
    alignItems: 'center',
  },
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
