import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const w = Dimensions.get('window').width / 100;
const h = Dimensions.get('window').height / 100;
const wh = (w * h) / 10;

//View
export const ViewRequest = styled.View`
  height: 60%;
  flex: 1;
  align-items: center;
`;
export const ViewDetails = styled.View`
  height: 5%;
  width: 91%;
  justify-content: space-between;
  margin-top: ${h * 7}px;
  margin-bottom: ${h * 3}px;
  flex-direction: row;
`;
export const ViewUnitDetails = styled.View`
  width: 25%;
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
  font-weight: bold;
`;

export const TypeService = styled(Text)`
  font-size: ${wh * 11}px;
`;

export const NameHirer = styled(Text)`
  font-size: ${wh * 6.5}px;
  margin-top: ${h * 4}px;
`;

export const TextDetails = styled(Text)`
  font-size: 18px;
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
  height: 15%;
  width: 85%;
  margin: ${h * 1}px 0px ${h * 4}px 0px;
  padding-left: 5px;
  border-radius: 4px;
  border-width: 0.2px;
  border-color: #000084;
`;
