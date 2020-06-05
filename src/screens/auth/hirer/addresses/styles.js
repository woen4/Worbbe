import styled from 'styled-components/native';
import {Button, w} from '../../../stylesShared';
import InputSimple from '../../../unform/inputSimple';

export const MapView = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const ButtonMap = styled(Button)`
  bottom: 3%;
  position: absolute;
`;

export const ImageMap = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContainerDetails = styled.View`
  width: 100%;
  height: 100%;
  padding: 5% 5% 5% 5%;
`;

export const ViewInput = styled.View`
  margin: 8% 0% 2% 0;
  padding: 0% 3% 0% 3%;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonSave = styled.TouchableOpacity`
  margin-top: 10%;
`;

export const InputNumber = styled(InputSimple)`
  width: ${w * 20}px;
  border-bottom-width: 2px;
  border-color: #000084;
  color: #000054;
`;

export const InputReference = styled(InputSimple)`
  width: ${w * 60}px;
  border-bottom-width: 2px;
  border-color: #000084;
  color: #000054;
`;

export const Input = styled(InputSimple)`
  background-color: #fff;
  width: 100%;
  border-bottom-width: 2px;
  border-color: #000084;
  color: #000054;
`;
