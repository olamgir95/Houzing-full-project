import styled from "styled-components";
import { ReactComponent as discord } from "../../assets/icons/discord.svg";
import { ReactComponent as house } from "../../assets/icons/house.svg";
import { ReactComponent as calc } from "../../assets/icons/calculator.svg";
import { ReactComponent as maps } from "../../assets/icons/maps.svg";

export const Container = styled.div`
  background-color: rgb(245, 247, 252);
  text-align: center;
  padding: 48px ;
  margin-top: 81px;
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  .cols {
    display: flex;
    column-gap: 60px;
    margin-top: 50px;
    > div {
      text-align: center;
      h4 {
        margin-bottom: 0;
        color: gray;
      }
    }
    svg {
      margin-bottom: 24px;
    }
  }
`;

export const DiscordIc = styled(discord)``;
export const HouseIc = styled(house)``;
export const CalcIc = styled(calc)``;
export const MapsIc = styled(maps)``;
