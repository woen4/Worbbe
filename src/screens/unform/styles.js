import styled from 'styled-components/native';
import IosIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MateriallIcon from 'react-native-vector-icons/MaterialIcons';
import {s2, w, h} from '../stylesShared';
const Text = styled.Text`
  font-family: 'SF Pro Display Bold';
`;

export const ViewInput = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewInputSimple = styled.View`
  margin: 8% 0% 2% 0;
  padding: 0% 3% 0% 3%;
`;

export const LabelInput = styled(Text)`
  align-self: flex-start;
  font-size: ${s2}px;
  color: #000084;
  margin-left: 7%;
`;

export const IconIos = styled(IosIcon)`
  position: absolute;
  padding-left: ${w * 2.5}px;
  padding-bottom: ${h * 2}px;
`;

export const IconMaterial = styled(MaterialIcon)`
  position: absolute;
  padding-left: ${w * 2.5}px;
  padding-bottom: ${h * 2}px;
`;

export const IconMateriall = styled(MateriallIcon)`
  position: absolute;
  padding-left: ${w * 2.5}px;
  padding-bottom: ${h * 2}px;
`;

export const TextInput = styled.TextInput`
  border-radius: 40px;
  height: ${h * 6}px;
  padding-left: 40px;
  width: 92%;
  color: #fff;
  font-size: ${s2}px;
  text-align-vertical: top;
  margin-bottom: 4%;
  font-family: 'SF Pro Display Bold';
  background-color: 'rgba(0, 0, 131, 0.5)';
`;
