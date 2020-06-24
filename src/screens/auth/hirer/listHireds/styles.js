import styled from 'styled-components/native';
import {ButtonIcon, h, s2, s3, wh} from '../../../stylesShared';

export const ViewRow = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const TextEmpty1 = styled.Text`
  font-family: 'SF Pro Display Bold';
  font-size: ${s3}px;
  position: absolute;
  top: 33%;
  left: 7%;
  color: #000084;
`;

export const TextEmpty2 = styled.Text`
  font-family: 'SF Pro Display Bold';
  font-size: ${s3}px;
  top: 77%;
  left: 75%;
  text-align: center;
  position: absolute;
  color: #000084;
`;

export const ContainerCard = styled.TouchableOpacity`
  flex-direction: row;

  flex: 1;
  padding: 2% 0% 2% 2%;
`;

export const Title = styled.Text`
  color: #000054;
  font-family: 'SF Pro Display Bold';
  font-size: ${s2}px;
  text-align: left;
  text-align-vertical: top;
  margin-left: 3%;
`;

export const ImageHired = styled.Image`
  width: ${wh * 12}px;
  height: ${wh * 12}px;
  border-radius: 50px;
  border-width: 1px;
  border-left-color: #999;
  border-right-color: #999;
`;


export const ButtonBlock = styled(ButtonIcon)`
  margin-top: 5%;
  align-self: center;
  position: absolute;
  right: 5%;
`;

export const Separator = styled.View`
  height: ${h * 0.1}px;
  background-color: #999;
  margin-left: 20%;
  margin-right: 5%;
`;
