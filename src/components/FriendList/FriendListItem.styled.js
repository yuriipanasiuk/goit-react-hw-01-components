import styled from 'styled-components';

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Status = styled.span`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Avatar = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;
