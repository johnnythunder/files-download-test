import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--gray-50);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const THead = styled.thead`
  border-bottom: 1px solid var(--gray-50);
`;

export const THeader = styled.th`
  padding: 24px 8px 8px;
  text-align: left;
`;

export const TBody = styled.tbody``;

export const TRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-50);
  }
`;

export const TData = styled.td`
  padding: 8px;
  text-align: left;
`;
