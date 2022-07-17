import { ChangeEvent, ReactNode, useEffect, useRef, memo } from 'react';
import styled from 'styled-components';
import checkboxActive from '../../icons/icon-checkbox-active.svg';
import checkboxInactive from '../../icons/icon-checkbox-inactive.svg';
import checkboxIndeterminate from '../../icons/icon-checkbox-indeterminate.svg';

export type CheckboxProps = {
  label?: ReactNode;
  title?: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
};

const CheckboxLabel = styled.label`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

const CheckboxContainer = styled.span`
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

  &:indeterminate {
    background-image: url(${checkboxIndeterminate});
  }
`;

const Checkbox = ({ label, title, checked, indeterminate, onChange }: CheckboxProps) => {
  const elRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  useEffect(() => {
    if (elRef.current) elRef.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  return (
    <CheckboxLabel>
      <CheckboxContainer>
        <CheckboxInput title={title} aria-label={title} checked={checked} onChange={handleChange} ref={elRef} />
      </CheckboxContainer>
      {label}
    </CheckboxLabel>
  );
};

Checkbox.displayName = 'Checkbox';

export default memo(Checkbox);
