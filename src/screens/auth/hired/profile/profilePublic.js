import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import foto from '../../../../assets/foto.jpg';
import {Form} from '@unform/mobile';
import Input from '../../../unform/input';
import {
  Container,
  ViewForm,
  ButtonIcon,
  TitleHeaderLight,
  TitleHeader,
  HeaderGradient,
} from '../../../stylesShared';

import {PhotoHired, ViewRating, MarginPhoto, HeaderProfile} from './styles';
import {ScrollView} from 'react-native';

export default function ProfileHired({navigation}) {
  return (
    <Container>
      <ScrollView>
        <ViewForm>
          <ViewRating>
            <TitleHeader>Avaliação</TitleHeader>
            <TitleHeader>
              <Icon name="ios-star" size={27} color="#f90" /> 4.5
            </TitleHeader>
          </ViewRating>

          <Form>
            <Input
              icon="work"
              iconFamily="Materiall"
              iconSize={25}
              label="Profissão:"
              editable={false}
              name=""
              backgroundColor="rgba(0, 0, 131, 0.5)"
            />
            <Input
              icon="ios-contact"
              iconFamily="Ionicons"
              iconSize={28}
              label="Nome:"
              editable={false}
              name=""
              backgroundColor="rgba(0, 0, 131, 0.5)"
            />
          </Form>
        </ViewForm>
        <HeaderGradient colors={['#000054', '#000074', '#000094']}>
          <HeaderProfile>
            <ButtonIcon onPress={() => navigation.goBack()}>
              <Icon name="ios-arrow-back" size={27} color="#fff" />
            </ButtonIcon>
            <TitleHeaderLight>Perfil</TitleHeaderLight>
            <ButtonIcon />
          </HeaderProfile>
          <MarginPhoto>
            <PhotoHired source={foto} />
          </MarginPhoto>
        </HeaderGradient>
      </ScrollView>
    </Container>
  );
}
