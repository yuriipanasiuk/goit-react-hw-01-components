import styled from 'styled-components';
import { getRandomHexColor } from './colorSwitcher';

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textColor};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  border-top: ${p => p.theme.borders.statCard};
`;

export const Item = styled.li`
  width: 50px;
  list-style: none;
  text-align: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  background-color: ${getRandomHexColor};
  box-shadow: ${p => p.theme.shadows.insideShadow};

  :not(:last-child) {
    border-right: ${p => p.theme.borders.statCard};
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
`;

export const PercentTage = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
`;
