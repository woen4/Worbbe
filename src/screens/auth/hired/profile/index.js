import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import foto from '../../../../assets/foto.jpg';
import {Form} from '@unform/mobile';
import Input from '../../../unform/input';
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
} from '../../../stylesShared';
import LinearGradient from 'react-native-linear-gradient';
import {PhotoHired, ViewRating, MarginPhoto, HeaderProfile} from './styles';
import {StyleSheet, ScrollView} from 'react-native';

export default function ProfileHired({navigation}) {
  const [editableInputs, setEditableInputs] = useState(false);
  const [icon, setIcon] = useState('md-create');

  function editInputs() {
    setEditableInputs(!editableInputs);
    editableInputs ? setIcon('md-create') : setIcon('md-save');
  }
  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <ViewForm style={{elevation: 10, marginTop: '60%'}}>
          <ViewRating style={{elevation: 10}}>
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
                editable={editableInputs}
                style={styles.input}
                name="name"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
              />
              <IosIconInput name="ios-contact" size={28} color="#fff" />
            </ViewInput>
            <LabelInput>Email:</LabelInput>
            <ViewInput>
              <Input
                editable={editableInputs}
                style={styles.input}
                name="email"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
              <IosIconInput name="ios-mail" size={28} color="#fff" />
            </ViewInput>
            <LabelInput>Telefone:</LabelInput>
            <ViewInput>
              <Input
                editable={editableInputs}
                style={styles.input}
                name="name"
                backgroundColor="rgba(0, 0, 131, 0.5)"
                autoCorrect={false}
                autoCompleteType="tel"
                textContentType="emailAddress"
                keyboardType="phone-pad"
              />
              <IosIconInput name="ios-call" size={28} color="#fff" />
            </ViewInput>
          </Form>
        </ViewForm>
        <LinearGradient
          colors={['#000054', '#000074', '#000094']}
          style={styles.ViewImage}>
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
    height: '45%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#000044',
    justifyContent: 'flex-start',
  },
  labelInput: {
    fontFamily: 'SF Pro Display Medium',
    color: '#000044',
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
