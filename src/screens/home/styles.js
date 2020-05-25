import styled from 'styled-components/native';
import {s3, h, w} from '../stylesGlobal';

const Text = styled.Text`
  font-family: 'SF Pro Display Bold';
`;

export const TitleCards = styled(Text)`
  font-size: ${s3}px;
  color: #000054;
  padding-bottom: ${h * 1}px;
`;

export const ImgCard = styled.Image`
  border-radius: 9px;
  width: ${w * 26}px;
  margin: 0px ${w * 3.5}px 0px ${w * 0}px;
  height: ${h * 15}px;
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
  padding: ${h * 1}px ${w * 2.5}px 0px ${w * 2.5}px;
`;
