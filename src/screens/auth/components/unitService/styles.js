import styled from 'styled-components/native';
import {s3, s1, s2, h, ButtonIcon} from '../../../stylesShared';

export const ContainerService = styled.TouchableOpacity`
  border-bottom-width: ${h * 0.2}px;
  border-bottom-color: #999;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding: 1% 3% 1% 3%;
`;

export const View1 = styled.View``;

export const View2 = styled(View1)`
  flex-direction: row;
  justify-content: center;
  width: 31%;
  margin-top: 1%;
  align-content: space-around;
  flex-wrap: wrap;
`;

export const View3 = styled(View1)`
  align-items: flex-end;
  margin-top: 1%;
`;

export const Title = styled.Text`
  color: #000054;
  font-family: 'SF Pro Display Bold';
  font-size: ${s3}px;
  margin-bottom: 6%;
`;

export const SubTitle = styled(Title)`
  font-size: ${s1 + 1}px;
`;

export const TextValues = styled(Title)`
  font-size: ${s2}px;
`;

export const ButtonHired = styled.TouchableOpacity`
  flex: 1;
`;
