import styled from 'styled-components/native';
import Input from '../unform/input';
import {wh, h, s1} from '../stylesShared';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';

export const InputAntiBot = styled(Input)`
  height: ${h * 6}px;
  width: 80%;
  font-family: 'SF Pro Display Bold';
  font-size: ${s1}px;
  margin-top: 0%;
  background-color: transparent;
  margin-bottom: 1%;
  color: #000054;
  align-self: center;
  padding-left: 0px;
  margin-left: 5%;
  text-align: center;
  text-align-vertical: bottom;
  border-radius: 6px;
  border-bottom-width: 2px;
  border-color: #000054;
  font-weight: 400;
`;

export const ViewAntiBot = styled(Animatable.View)`
  height: ${h * 17}px;

  width: 90%;
  background-color: rgba(0, 0, 0, 0.05);
  border-width: 2px;
  border-color: #999;
  border-radius: 5px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-bottom: -7%;
`;

export const ButtonRefreshBot = styled.TouchableOpacity`
  align-self: flex-end;

  height: ${wh * 6}px;
  width: ${wh * 6}px;
  top: 5%;
  right: 2%;
  position: absolute;
`;

export const IconRobot = styled.TouchableOpacity`
  position: absolute;
  top: 65%;
  right: 3%;
`;

export const ModalBot = styled(Modal)`
  align-items: center;
  justify-content: center;
`;
