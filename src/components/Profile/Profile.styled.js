import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.white};
`;

export const Avatar = styled.img`
  margin-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.round};
  background: ${p => p.theme.colors.avatarBg};
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeight.bold};
`;

export const SocName = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textColor};
`;

export const Location = styled.p`
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.textColor};
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.statListBgColor};
  border-top: ${p => p.theme.borders.profile};
`;

export const Item = styled.li`
  list-style: none;
  text-align: center;
  width: 80px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  :not(:last-child) {
    border-right: ${p => p.theme.borders.profile};
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textColor};
`;

export const Quantity = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeight.bold};
`;
