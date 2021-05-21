import { Avatar, Card } from '@material-ui/core';
import styled from 'styled-components';


export const Container = styled(Card)`
  height: 114.45946502685547px;
  width: 114.45946502685547px;
  left: 1.04052734375px;
  border-radius: 10.40540599822998px;
  background-color: #004BDCB0;

 
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  margin-bottom: 25px;
`;

export const ImageProfile = styled(Avatar)`
  height: 60px;
  width: 60px;
`;

export const Company = styled.span`
  color: #fff;

  font-weight: bold;
`;

export const ProfileAcess = styled.span`
  color: #fff;
`;

