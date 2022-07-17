import { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';
import checkboxActive from '../../icons/icon-checkbox-active.svg';
import checkboxInactive from '../../icons/icon-checkbox-inactive.svg';

export type CheckboxProps = {
  label?: ReactNode;
  title?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const CheckboxLabel = styled.label`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

const CheckboxReplacement = styled.span`
  display: flex;
  height: 20px;
  width: 20px;
  align-items: stretch;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  flex-grow: 1;
  margin: 0;
  padding: 0;
  appearance: none;
  background: url(${checkboxInactive}) no-repeat center center;
  background-size: cover;
  transition: background-image 150ms;
  cursor: pointer;

  &:checked {
    background-image: url(${checkboxActive});
  }
`;

const Checkbox = ({ label, title, checked, onChange }: CheckboxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <CheckboxLabel>
      <CheckboxReplacement>
        <CheckboxInput title={title} aria-label={title} checked={checked} onChange={handleChange} />
      </CheckboxReplacement>
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
