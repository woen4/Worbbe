import styled from 'styled-components/native';
import {w, h, s1} from '../../stylesShared';

export const ViewDateTime = styled.View`
  width: 45%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 0px ${w * 0}px ${h * 0}px ${w * 0}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const SuportDateTime = styled.View`
  width: 100%;
  height: ${h * 8}px;
  margin-top: 1%;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerDetails = styled.View`
  width: 100%;
  height: 100%;
  padding: 5% 5% 5% 5%;
`;

export const ViewInput = styled.View`
  margin: 8% 0% 2% 0;
  padding: 0% 3% 0% 3%;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextDescription = styled.Text`
  height: ${h * 12}px;
  width: 100%;
  font-family: 'SF Pro Display Medium';
  font-size: ${s1 - 2}px;
  margin: 5% 0% 7% 0%;
  padding: 0.5% 1.5% 0px 1.5%;
  text-align: justify;
  border-radius: 4px;
  border-width: 0.2px;
  border-color: #000084;
`;

export const MarginPhoto = styled.View`
  height: ${w * 36}px;
  width: ${w * 36}px;
  background-color: transparent;
  border-radius: 120px;
  margin-top: 5%;
  border-width: 2.5px;
  border-color: #000054;
`;

export const PhotoHired = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 120px;
`;
