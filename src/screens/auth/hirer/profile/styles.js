import styled from 'styled-components/native';
import {w, h, ViewForm} from '../../../stylesShared';
import FastImage from 'react-native-fast-image';

export const MarginPhoto = styled.View`
  height: ${w * 36}px;
  width: ${w * 36}px;
  background-color: transparent;
  border-radius: 120px;
  margin-top: ${h * 1}px;
  padding: ${w * 0.1}px ${w * 0.1}px ${w * 0.1}px ${w * 0.1}px;
  border-width: 4px;
  border-color: #fff;
`;
export const ViewFormAdjusted = styled(ViewForm)`
  margin: 60% ${w * 5}px ${h * 3}px ${w * 5}px;
`;

export const HeaderProfile = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 20%;
  padding-top: 3.5%;
  padding-right: 2%;
  padding-left: 2%;
`;

export const ViewRating = styled.View`
  width: 35%;
  height: ${h * 10}px;
  border-width: 1px;
  border-color: #999;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  margin: 4% 0% 4% 0%;
`;

export const ViewLocation = styled.View`
  height: 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
