import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type TRowProps = PropsWithChildren<{
  selected?: boolean;
  selectable?: boolean;
}>;

export const Table = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  border-bottom: 1px solid var(--gray-50);
`;

export const THeader = styled.th`
  padding: 24px 8px 8px;
  text-align: left;
`;

export const TBody = styled.tbody``;

export const TRow = styled.tr<TRowProps>`
  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-50);
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--gray-30);
    `}

  ${(props) =>
    props.selectable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: var(--gray-20);
      }
    `}
`;

export const TData = styled.td`
  padding: 8px;
  text-align: left;
`;
