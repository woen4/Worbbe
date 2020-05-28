import styled from 'styled-components/native';
import {s4, s3, s1, s2, h, w} from '../../../stylesShared';

export const ContainerCard = styled.View`
  border-bottom-width: ${h * 0.2}px;
  border-bottom-color: #999;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding: 1% 3% 1% 3%;
`;

export const ViewDetails = styled.View`
  justify-content: center;
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

