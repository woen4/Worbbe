import styled from 'styled-components/native';
import {s1, s2, s3, s4, s5, h, w} from '../../../stylesShared';

//View
export const ViewRequest = styled.View`
  flex: 1;
  align-items: center;
`;

export const ViewDetails = styled.View`
  height: 5%;
  width: 90%;
  justify-content: space-between;
  margin-top: 7%;
  margin-bottom: 5%;
  flex-direction: row;
`;

export const ViewUnitDetails = styled.View`
  width: 33%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ViewPrice = styled(ViewUnitDetails)`
  margin-top: ${h * 3}px;
`;
//

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
  height: ${w * 35}px;
  width: ${w * 35}px;
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
