import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  box-shadow: ${p => p.theme.shadows.shadow};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
