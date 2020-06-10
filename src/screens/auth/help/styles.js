import styled from 'styled-components/native';
import Input from '../../unform/input';
import {SmallText, s3, s2, h} from '../../stylesShared';

export const Labels = styled(SmallText)`
  font-size: ${s3}px;
  color: #000054;
  margin-left: 7%;
  margin-top: 5%;
`;

export const InputTitle = styled(Input)`
  border-radius: 40;
  height: ${h * 6}px;
  margin-horizontal: 4%;
  padding-left: 10;
  width: 92%;
  color: #fff;
  font-size: ${s2}px;
  text-align-vertical: top;
  margin-bottom: 4%;
  font-family: 'SF Pro Display Bold';
  background-color: 'rgba(0, 0, 131, 0.5)';
`;

export const InputDescription = styled(Input)`
  border-radius: 40;
  height: ${h * 35}px;
  margin-horizontal: 4%;
  padding-left: 10;
  width: 92%;
  color: #fff;
  font-size: ${s2}px;
  text-align-vertical: top;
  margin-bottom: 4%;
  font-family: 'SF Pro Display Bold';
  background-color: 'rgba(0, 0, 131, 0.5)';
`;
