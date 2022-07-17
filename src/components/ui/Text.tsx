import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TextProps = PropsWithChildren<{
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4';
  block?: boolean;
}>;

const Text = styled.span<TextProps>`
  display: ${(props) => (props.block ? 'block' : 'inline')};
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.3rem;
`;

export const TextDisplay = styled(Text)`
  font-size: 1.4rem;
`;

export const TextTitle = styled(Text)`
  font-size: 1.2rem;
`;

export const TextBody = styled(Text)`
  font-size: 1rem;
`;
