import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../assets/LogoWG.png';
import google from '../../assets/google.png';
import LinearGradient from 'react-native-linear-gradient';

import {
  TitleForm,
  Logo,
  LogoGoogle,
  SmallTextRegister,
  SmallTextWithMargin,
  ViewOR,
  HalfDivider,
  SmallTextOR,
  SmallTextFB,
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
  InputWithIcon,
  ViewInput,
} from '../stylesGlobal';

import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
const w = Dimensions.get('window').width / 100;
const h = Dimensions.get('window').height / 100;

export default function Home({navigation}) {
  Icon.loadFont();
  function handleLogin() {
    navigation.navigate('FeedRequests');
  }
  return (
    <Container>
      <KeyboardAvoidingView>
        <ScrollView>
          <ViewForm style={{elevation: 10, marginTop: h * 23}}>
            <TitleForm>LOGIN</TitleForm>
            <ViewInput>
              <InputWithIcon
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                placeholderTextColor="#fff"
                placeholderTextWeigth="bold"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Seu email"
              />
              <Icon
                style={{position: 'absolute', paddingLeft: 10}}
                name="gmail"
                size={24}
                color="#fff"
              />
            </ViewInput>
            <ViewInput>
              <InputWithIcon
                backgroundColor="rgba(0, 0, 131, 0.5)"
                placeholderTextColor="#fff"
                placeholderTextWeigth="bold"
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Sua senha"
              />
              <Icon
                style={{position: 'absolute', paddingLeft: 10}}
                name="lock"
                size={24}
                color="#fff"
              />
            </ViewInput>
            <View style={styles.ViewCBox}>
              <CheckBox
                tintColors={{true: '#000084', false: '#000084'}}
                disabled={false}
              />
              <SmallText>Prestador de serviço</SmallText>
            </View>

            <ButtonLight onPress={() => handleLogin()}>
              <TextButtonLight>Login</TextButtonLight>
            </ButtonLight>

            <SmallTextWithMargin>
              Não tem uma conta?
              <SmallTextRegister
                onPress={handleLogin}
                style={{color: '#000084', fontSize: s2}}>
                {' '}
                Cadastre-se
              </SmallTextRegister>
            </SmallTextWithMargin>

            <SmallTextWithMargin>Esqueceu sua senha?</SmallTextWithMargin>
            <ViewOR>
              <HalfDivider />
              <SmallTextOR>OU</SmallTextOR>
              <HalfDivider />
            </ViewOR>
            <ViewSocial>
              <SmallTextFB>
                <Icon name="facebook" size={24} color="#fff" />
              </SmallTextFB>
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
});
