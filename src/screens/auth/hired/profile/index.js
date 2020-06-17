import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Form} from '@unform/mobile';
import ImagePicker from 'react-native-image-picker';
import Input from '../../../unform/input';
import ToastDefault from '../../../toasts';
import {useAuth} from '../../../../contexts/authContext';
import {updateProfile} from '../../../../backend/firebase/profileFB';
import {validateProfile} from '../../../../backend/validations';
import FastImage from 'react-native-fast-image';
import progress from '../../../../assets/progressLottie.json';
import {LottieView} from 'lottie-react-native';
import {
  Container,
  ButtonIcon,
  TitleHeaderLight,
  ViewForm,
  HeaderGradient,
  ButtonCamera,
  ButtonLogout,
  SmallText,
  PhotoProfile,
  TitleHeader,
  ModalLoading,
  wh,
} from '../../../stylesShared';
import {ScrollView} from 'react-native';
import {MarginPhoto, HeaderProfile, ViewRating} from './styles';
import {LottieLoading} from '../../../lottieLoading';

export default function ProfileHired({navigation}) {
  const {user, deleteContext, refresh} = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [avatar, setAvatar] = useState();
  const [editableInputs, setEditableInputs] = useState(false);
  const [icon, setIcon] = useState('md-create');
  const formRef = useRef(null);

  async function saveUpdate(data) {
    if (validateProfile(data) === true) {
      setModalVisible(true);
      data.avatar = avatar;
      data.avatarRef = user.avatarRef;
      const response = await updateProfile(data);
      setModalVisible(false);
      ToastDefault(response);
      if (response === 'Perfil atualizado!') {
        refresh();
      }
    } else {
      ToastDefault(validateProfile(data));
      setIcon('md-save');
    }
  }

  async function logOut() {
    const response = await deleteContext();
    ToastDefault(response);
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

  const optionsImagePicker = {
    title: 'Selecione uma foto de perfil:',
    chooseFromLibraryButtonTitle: 'Galeria',
    takePhotoButtonTitle: 'Tirar uma foto',
    cancelButtonTitle: 'Cancelar',
  };

  function editInputs() {
    setEditableInputs(!editableInputs);
    editableInputs ? setIcon('md-create') : setIcon('md-save');
    if (icon === 'md-save') {
      formRef.current.submitForm();
    }
  }
  return (
    <Container>
      <ScrollView>
        <ViewForm>
          <ViewRating>
            <TitleHeader>Avaliação</TitleHeader>
            <TitleHeader>
              <Icon name="ios-star" size={27} color="#f90" />
              {user.rating}
            </TitleHeader>
          </ViewRating>
          <Form ref={formRef} onSubmit={saveUpdate} initialData={user}>
            <Input
              icon="work"
              iconFamily="Materiall"
              iconSize={28}
              label="Profissão:"
              name="occupation"
              editable={false}
              backgroundColor="rgba(0, 0, 131, 0.5)"
              autoCorrect={false}
            />
            <Input
              icon="ios-contact"
              iconFamily="Ionicons"
              iconSize={28}
              label="Nome:"
              name="name"
              editable={editableInputs}
              backgroundColor="rgba(0, 0, 131, 0.5)"
              autoCorrect={false}
            />
            <Input
              icon="ios-mail"
              iconFamily="Ionicons"
              iconSize={28}
              label="E-mail:"
              editable={editableInputs}
              name="email"
              backgroundColor="rgba(0, 0, 131, 0.5)"
              autoCorrect={false}
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />

            <Input
              icon="ios-call"
              iconFamily="Ionicons"
              iconSize={28}
              label="Telefone:"
              editable={false}
              name="phone"
              backgroundColor="rgba(0, 0, 131, 0.5)"
              autoCorrect={false}
              autoCompleteType="tel"
              keyboardType="phone-pad"
            />
          </Form>
          <ButtonLogout onPress={() => logOut()}>
            <SmallText>Sair </SmallText>
            <Icon name="ios-log-out" size={26} color="#000084" />
          </ButtonLogout>
        </ViewForm>
        <HeaderGradient colors={['#000054', '#000074', '#000094']}>
          <HeaderProfile>
            <ButtonIcon onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" size={27} color="#fff" />
            </ButtonIcon>
            <TitleHeaderLight>Perfil</TitleHeaderLight>
            <ButtonIcon onPress={editInputs}>
              <Icon name={icon} size={27} color="#fff" />
            </ButtonIcon>
          </HeaderProfile>
          <MarginPhoto>
            <PhotoProfile
              source={{
                uri: avatar ? avatar.uri : user.avatarUrl,
                priority: FastImage.priority.low,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <ButtonCamera
              disabled={!editableInputs}
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
        <LottieLoading visible={modalVisible} source={progress} size={8} />
      </ScrollView>
    </Container>
  );
}
