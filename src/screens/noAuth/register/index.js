import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile';
import Input from '../../unform/input';
import {createUser} from '../../../backend/firebase/auth';
import ImagePicker from 'react-native-image-picker';
import {validateRegister} from '../../../backend/validations';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, ScrollView, Alert} from 'react-native';
import ToastDefault from '../../toasts';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';

import {
  Container,
  LabelInput,
  s2,
  ViewInput,
  ButtonIcon,
  TitleHeaderLight,
  h,
  IosIconInput,
  TextButtonLight,
} from '../../stylesShared';
import {
  PhotoHired,
  ButtonCamera,
  MarginPhoto,
  HeaderProfile,
  ViewFormAdjusted,
  ButtonRegister,
} from './styles';

export default function Register({route, navigation}) {
  let [avatar, setAvatar] = useState();
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
      <ScrollView style={{flex: 1}}>
        <ViewFormAdjusted style={{elevation: 10}}>
          <Form
            ref={formRef}
            onSubmit={handleRegister}
            style={{alignItems: 'center'}}>
            <LabelInput>Nome:</LabelInput>
            <ViewInput>
              <Input
                style={styles.input}
                name="name"
                textContentType="name"
                autoCompleteType="name"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                placeholder="Seu nome"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
              <IosIconInput name="ios-contact" size={28} color="#fff" />
            </ViewInput>
            <LabelInput>Email:</LabelInput>
            <ViewInput>
              <Input
                style={styles.input}
                name="email"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Seu email"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
              <IosIconInput name="ios-mail" size={28} color="#fff" />
            </ViewInput>
            <LabelInput>Telefone:</LabelInput>
            <ViewInput>
              <Input
                style={styles.input}
                name="phone"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                autoCompleteType="tel"
                textContentType="emailAddress"
                keyboardType="phone-pad"
                placeholder="Seu telefone com DDD"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
              <IosIconInput name="ios-call" size={28} color="#fff" />
            </ViewInput>

            <LabelInput>Senha:</LabelInput>
            <ViewInput>
              <Input
                style={styles.input}
                name="password"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                placeholderTextWeigth="bold"
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Sua senha"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
              <IosIconInput name="ios-lock" size={28} color="#fff" />
            </ViewInput>
            <ButtonRegister onPress={() => formRef.current.submitForm()}>
              <TextButtonLight>Cadastrar-se</TextButtonLight>
            </ButtonRegister>
          </Form>
        </ViewFormAdjusted>
        <LinearGradient
          colors={['#000054', '#000074', '#000094']}
          style={styles.ViewImage}>
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
        </LinearGradient>
        <Modal
          backdropColor="#FFF"
          backdropOpacity={0.8}
          animationIn="bounceIn"
          animationOut="bounceOut"
          animationInTiming={1000}
          animationOutTiming={1000}
          useNativeDriver={true}
          style={styles.modal}
          isVisible={modalVisible}>
          <Progress.CircleSnail
            style={styles.progress}
            thickness={4}
            spinDuration={1500}
            indeterminate={true}
            color={['#606094', '#000074', '#404094']}
          />
        </Modal>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  ViewImage: {
    alignItems: 'center',
    height: h * 40,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#000044',
    justifyContent: 'flex-start',
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
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
