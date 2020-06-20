import styled from 'styled-components/native';
import {Text, s3, ButtonLight, Button, TitleHeader} from '../../stylesShared';

export const ViewButtons = styled.View`
  width: 100%;
  position: absolute;
  bottom: 2%;
  flex-direction: row;
  justify-content: space-around;
`;

export const Title = styled(TitleHeader)`
  align-self: center;
  text-align: center;
`;

export const ButtonNext = styled(Button)`
  width: 45%;
`;

export const ButtonBack = styled(ButtonLight)`
  width: 45%;
`;

