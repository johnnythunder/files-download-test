import styled from 'styled-components';

type StatusOrbProps = {
  status: 'success' | 'warning' | 'error';
};

const backgroundColorMap: Record<string, string> = {
  success: 'var(--green)',
  warning: 'var(--yellow)',
  error: 'var(--red)',
};

const StatusOrb = styled.span<StatusOrbProps>`
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${(props) => backgroundColorMap[props.status]};
`;

export default StatusOrb;
