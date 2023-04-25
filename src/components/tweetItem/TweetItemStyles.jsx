import styled from 'styled-components';
import '@fontsource/montserrat';

import { ReactComponent as itemLogo } from '../../images/Logo.svg';

export const ItemCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 460px;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 36px;
`;

export const ItemLogo = styled(itemLogo)`
  width: 76px;
  height: 22px;
  margin-bottom: 250px;
`;

export const ItemPicture = styled.div`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const ItemAvatar = styled.div`
  position: absolute;
  display: flex;

  height: 80px;
  top: 50%;
  justify-content: center;
  align-items: center;
  transform: translate(-20px, -50%);
`;

export const ItemAvatarBox = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: center;
  background: #5736a3;
  top: 50%;
  transform: translate(0, -50%);
`;

export const ItemAvatarImg = styled.div`
  z-index: 6;
  position: absolute;
  display: flex;
  height: 67px;
  justify-content: center;
  align-items: center;
  background: #5736a3;
  overflow: hidden;
  border-radius: 50%;
  top: 50%;
  transform: translate(-1%, -57%);
`;

export const ItemTxt = styled.p`
  margin: 0;
  margin-bottom: 16px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  color: #ebd8ff;
  align-self: center;
`;

export const ItemBtnFollow = styled.button`
  margin-top: 10px;
  align-self: center;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;

export const ItemBtnUnfollow = styled.button`
  margin-top: 10px;
  align-self: center;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;
