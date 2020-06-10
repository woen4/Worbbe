import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile';
import Input from '../../unform/input';
import {createUser} from '../../../backend/firebase/registerFB';
import ImagePicker from 'react-native-image-picker';
import {validateRegister} from '../../../backend/validations';
import {ScrollView} from 'react-native';
import ToastDefault from '../../toasts';
import progress from '../../../assets/progress.json';
import LottieView from 'lottie-react-native';
import {
  Container,
  ButtonIcon,
  TitleHeaderLight,
  TextButtonLight,
  ModalLoading,
  ViewForm,
  HeaderGradient,
  HeaderProfile,
  ButtonCamera,
  wh,
} from '../../stylesShared';
import {PhotoHired, MarginPhoto, ButtonRegister} from './styles';

export default function Register({route, navigation}) {
  const [avatar, setAvatar] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const formRef = useRef(null);
  const {isClient} = route.params;

  const optionsImagePicker = {
    title: 'Selecione uma foto de perfil:',
    chooseFromLibraryButtonTitle: 'Galeria',
    takePhotoButtonTitle: 'Tirar uma foto',
    cancelButtonTitle: 'Cancelar',
  };

  async function handleRegister(data) {
    data.avatar = avatar;
    if (validateRegister(data) === true) {
      setModalVisible(true);
      data.isClient = isClient;
      data.avatar = avatar.path;
      const response = await createUser(data);
      setModalVisible(false);
      if (response === false) {
        ToastDefault('Cadastro realizado!');
        navigation.navigate('Login');
      } else {
        ToastDefault(response);
      }
    } else {
      ToastDefault(validateRegister(data));
    }
  }

  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }
    if (data.error) {
      return;
    }
    if (!data.uri) {
      return;
    }
    setAvatar(data);
  }

  return (
    <Container>
      <ScrollView>
        <ViewForm>
          <Form ref={formRef} onSubmit={handleRegister}>
            <Input
              icon="ios-contact"
              iconFamily="Ionicons"
              iconSize={28}
              label="Nome:"
              name="name"
              textContentType="name"
              autoCompleteType="name"
              backgroundColor="rgba(0, 0, 131, 0.5)"
              autoCorrect={false}
              placeholder="Seu nome"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
            <Input
              icon="ios-mail"
              iconFamily="Ionicons"
              iconSize={28}
              label="E-mail:"
              name="email"
              backgroundColor="rgba(0, 0, 131, 0.5)"
              autoCorrect={false}
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Seu email"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
            <Input
              icon="ios-call"
              iconFamily="Ionicons"
              iconSize={28}
              label="Telefone:"
              name="phone"
              backgroundColor="rgba(0, 0, 131, 0.5)"
              autoCorrect={false}
              autoCompleteType="tel"
              textContentType="emailAddress"
              keyboardType="phone-pad"
              placeholder="Seu telefone com DDD"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
            <Input
              icon="ios-lock"
              iconFamily="Ionicons"
              iconSize={28}
              label="Senha:"
              name="password"
              backgroundColor="rgba(0, 0, 131, 0.5)"
              placeholderTextWeigth="bold"
              autoCorrect={false}
              secureTextEntry={true}
              placeholder="Sua senha"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />

            <ButtonRegister onPress={() => formRef.current.submitForm()}>
              <TextButtonLight>Cadastrar-se</TextButtonLight>
            </ButtonRegister>
          </Form>
        </ViewForm>
        <HeaderGradient colors={['#000054', '#000074', '#000094']}>
          <HeaderProfile>
            <ButtonIcon onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" size={27} color="#fff" />
            </ButtonIcon>
            <TitleHeaderLight>Cadastro</TitleHeaderLight>
            <ButtonIcon />
          </HeaderProfile>
          <MarginPhoto>
            <PhotoHired
              source={{
                uri: avatar
                  ? avatar.uri
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png',
              }}
            />
            <ButtonCamera
              onPress={() =>
                ImagePicker.showImagePicker(
                  optionsImagePicker,
                  imagePickerCallback,
                )
              }>
              <Icon name="ios-camera" size={32} color="#000084" />
            </ButtonCamera>
          </MarginPhoto>
        </HeaderGradient>
        <ModalLoading
          backdropColor="#FFF"
          backdropOpacity={0.8}
          animationIn="bounceIn"
          animationOut="bounceOut"
          animationInTiming={1000}
          animationOutTiming={1000}
          useNativeDriver={true}
          isVisible={modalVisible}>
          <LottieView
            style={{width: wh * 8, height: wh * 8}}
            source={progress}
            autoPlay
            loop
          />
        </ModalLoading>
      </ScrollView>
    </Container>
  );
}
