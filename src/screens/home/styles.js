import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const w = Dimensions.get('window').width / 100;
const h = Dimensions.get('window').height / 100;
const wh = (w * h) / 10;

export const TitleCards = styled.Text`
  font-size: ${wh * 7}px;
  font-weight: bold;
  color: #000054;
  padding-left: ${w * 2}px;
  padding-bottom: ${h * 1}px;
`;

export const ImgCard = styled.Image`
  border-radius: 9px;
  width: ${wh * 38}px;
  margin: 0px ${w * 2}px 0px ${w * 2}px;
  height: ${wh * 38}px;
`;

export const ViewImage = styled.View`
  align-items: center;
  justify-content: center;
  height: ${h * 25}px;
`;

export const Logo = styled.Image`
  flex: 1;
`;

export const ScrollCards = styled.View`
  background-color: #fff;
  height: ${h * 23}px;
  margin: ${h * 2}px ${w * 5}px ${h * 2}px ${w * 5}px;
  padding-top: ${h * 1}px;
`;
