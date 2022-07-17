import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type BoxProps = PropsWithChildren<{
  className?: string;
  flexDirection?: 'row' | 'column';
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  flexGrow?: number;
  flexShrink?: number;
}>;

const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  margin: 0;
  padding: 0;
`;

export default Box;
