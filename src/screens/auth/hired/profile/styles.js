import styled from 'styled-components/native';
import {w, h} from '../../../stylesShared';

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

export const HeaderProfile = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 20%;
  padding-top: 3.5%;
  padding-right: 2%;
  padding-left: 2%;
`;

export const PhotoHired = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 120px;
`;

export const ViewRating = styled.View`
  width: 35%;
  height: 17%;
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
