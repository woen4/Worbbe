import React, {useState} from 'react';
import service from '../../assets/service.jpeg';
import logo from '../../assets/LogoWG.png';
import {TitleCards, ImgCard, ScrollCards, Logo, ViewImage} from './styles';
import {
  Container,
  ButtonModal,
  TextButtonModal,
  TitleModal,
  ViewModal,
} from '../stylesGlobal';
import {ScrollView, StyleSheet} from 'react-native';
import Modal from 'react-native-modalbox';

export default function Home({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  function handleLogin() {
    navigation.navigate('FeedRequests');
  }
  return (
    <Container>
      <Modal
        style={styles.modal}
        isOpen={modalOpen}
        onClosed={closeModal}
        position={'bottom'}
        useNativeDriver={true}>
        <ViewModal>
          <TitleModal>Deseja acessar nossa plataforma como:</TitleModal>
          <ButtonModal>
            <TextButtonModal>Cliente</TextButtonModal>
          </ButtonModal>
          <ButtonModal>
            <TextButtonModal>Prestador de serviços</TextButtonModal>
          </ButtonModal>
        </ViewModal>
      </Modal>
      <ScrollView>
        <ViewImage>
          <Logo style={{resizeMode: 'contain'}} source={logo} />
        </ViewImage>
        <ScrollCards onTouchStart={openModal} style={{elevation: 10}}>
          <TitleCards> Serviços Hidráulicos: </TitleCards>
          <ScrollView
            onResponderMove={handleLogin}
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

const styles = StyleSheet.create({
  modal: {
    height: '30%',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
});
