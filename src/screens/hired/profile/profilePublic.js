import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import foto from '../../../assets/foto.jpg';
import {Form} from '@unform/mobile';
import Input from '../../components/form/input';
import {
  Container,
  ViewForm,
  LabelInput,
  s2,
  ViewInput,
  ButtonIcon,
  TitleHeaderLight,
  TitleHeader,
  h,
  IosIconInput,
  MaterialIconInput,
} from '../../stylesGlobal';
import LinearGradient from 'react-native-linear-gradient';
import {PhotoHired, ViewRating, MarginPhoto, HeaderProfile} from './styles';
import {StyleSheet, ScrollView} from 'react-native';

export default function ProfileHired({navigation}) {
  function handleFeedRequests() {
    navigation.navigate('FeedRequests');
  }

  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <ViewForm style={{elevation: 10, marginTop: '60%'}}>
          <ViewRating style={{elevation: 10, height: '27%'}}>
            <TitleHeader>Avaliação</TitleHeader>
            <TitleHeader>
              <Icon name="ios-star" size={27} color="#f90" /> 4.5
            </TitleHeader>
          </ViewRating>

          <Form style={{alignItems: 'center'}}>
            <LabelInput>Profissão:</LabelInput>
            <ViewInput>
              <Input
                editable={false}
                style={styles.input}
                name="name"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
              />
              <MaterialIconInput name="work" size={25} color="#fff" />
            </ViewInput>
            <LabelInput>Nome:</LabelInput>
            <ViewInput>
              <Input
                editable={false}
                style={styles.input}
                name="name"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
              />
              <IosIconInput name="ios-contact" size={28} color="#fff" />
            </ViewInput>
          </Form>
        </ViewForm>
        <LinearGradient
          colors={['#000054', '#000074', '#000094']}
          style={styles.ViewImage}>
          <HeaderProfile>
            <ButtonIcon onPress={handleFeedRequests}>
              <Icon name="ios-arrow-back" size={27} color="#fff" />
            </ButtonIcon>
            <TitleHeaderLight>Perfil</TitleHeaderLight>
            <ButtonIcon />
          </HeaderProfile>
          <MarginPhoto>
            <PhotoHired style={{resizeMode: 'contain'}} source={foto} />
          </MarginPhoto>
        </LinearGradient>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  ViewImage: {
    alignItems: 'center',
    height: h * 40,
    width: '100%',
    marginBottom: 100,
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
});
