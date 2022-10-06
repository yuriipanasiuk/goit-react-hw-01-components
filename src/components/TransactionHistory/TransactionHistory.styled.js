import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${p => p.theme.shadows.shadow};
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.tableHeadBg};
`;

export const Column = styled.tr`
  text-transform: uppercase;
`;

export const Cell = styled.th`
  color: ${p => p.theme.colors.white};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const TableCell = styled.td`
  color: ${p => p.theme.colors.textColor};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const TableColumn = styled.tr`
  :nth-child(2n) {
    background-color: ${p => p.theme.colors.white};
  }
`;
