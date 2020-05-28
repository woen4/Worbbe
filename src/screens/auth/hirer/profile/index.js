import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import foto from '../../../../assets/foto.jpg';
import {Form} from '@unform/mobile';
import Input from '../../../unform/input';
import {
  Container,
  LabelInput,
  s2,
  ViewInput,
  ButtonIcon,
  TitleHeaderLight,
  TitleHeader,
  h,
  IosIconInput,
} from '../../../stylesShared';
import LinearGradient from 'react-native-linear-gradient';
import {
  PhotoHired,
  ViewRating,
  MarginPhoto,
  HeaderProfile,
  ViewFormAdjusted,
} from './styles';
import {StyleSheet, ScrollView} from 'react-native';

export default function ProfileHirer({navigation}) {
  const [editableInputs, setEditableInputs] = useState(false);
  const [icon, setIcon] = useState('md-create');

  function editInputs() {
    setEditableInputs(!editableInputs);
    editableInputs ? setIcon('md-create') : setIcon('md-save');
  }
  return (
    <Container>
      <ScrollView style={{flex: 1}}>
        <ViewFormAdjusted style={{elevation: 10}}>
          <Form style={{alignItems: 'center'}}>
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
        </ViewFormAdjusted>
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
    height: '55%',
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
    borderRadius: 50,
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
