import styled from 'styled-components/native';
import {s1, s2, s3, s5, h, w, wh} from '../../../stylesShared';

//View
export const ViewRequest = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 2%;
`;

export const ViewDetails = styled.View`
  height: 6%;
  width: 85%;
  padding-horizontal: 1%;
  align-self: center;
  justify-content: space-between;
  margin-top: 7%;
  margin-bottom: 5%;
  flex-direction: row;
`;

//Text
const Text = styled.Text`
  color: #000054;
  font-family: 'SF Pro Display Bold';
`;

export const TypeService = styled(Text)`
  font-size: ${s5}px;
`;

export const NameHirer = styled(Text)`
  font-size: ${s3}px;
  margin-top: ${h * 4}px;
`;

export const TextDetails = styled(Text)`
  font-size: ${s2}px;
  margin-left: 5px;
`;
//

//Image
export const PhotoHirer = styled.Image`
  height: ${wh * 28}px;
  width: ${wh * 28}px;
  border-radius: 100px;
  border-width: 0.5px;
  border-color: #000084;
`;
//

//TextInput
export const TextDescription = styled.Text`
  height: ${h * 12}px;
  width: 85%;
  font-family: 'SF Pro Display Medium';
  font-size: ${s1 - 2}px;
  margin: 1% 0px 7% 0px;
  padding: 0.5% 1.5% 0px 1.5%;
  text-align: justify;
  border-radius: 4px;
  border-width: 0.2px;
  border-color: #000084;
`;

export const Divider = styled.View`
  height: ${h * 0.3}px;
  margin-bottom: 3%;
  margin-top: 3%;
  background-color: #999;
  width: 100%;
`;

export const ViewRow = styled.View`
  flex-direction: row;
`;
