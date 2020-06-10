import styled from 'styled-components/native';
import {Button, h, s1} from '../../../stylesShared';
import Modal from 'react-native-modal';
import Input from '../../../unform/input';

export const MapView = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const ButtonMap = styled(Button)`
  bottom: 3%;
  right: 4.5%;
  position: absolute;
`;

export const ModalNameAddress = styled(Modal)`
  align-items: center;
  justify-content: center;
`;

export const ContainerDetails = styled.View`
  width: 100%;
  height: 100%;
  padding: 5% 5% 5% 5%;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonSave = styled.TouchableOpacity`
  margin-top: 10%;
`;

export const ViewInput = styled.View`
  margin: 0% 0% 8% 0;
  padding: 0% 3% 0% 3%;
  width: 50%;
`;

export const InputSimple = styled(Input)`
  border-radius: 0px;
  padding-left: 0px;
  color: #fff;
  font-size: ${s1}px;
  margin-bottom: 0%;
  background-color: transparent;
  border-bottom-width: 2px;
  border-color: #000084;
  color: #000054;
  padding-top: 0px;
  margin-top: 0%;
  padding-bottom: 0%;
  font-family: 'SF Pro Display Regular';
`;
