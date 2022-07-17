import { memo, useMemo } from 'react';
import { Checkbox, TextDisplay } from '../ui';
import { useSelectable } from '../../data/SelectableContext';
import useGetFiles from '../../hooks/useGetFiles';
import { getFileKey } from './utils';

const SelectAllCheckbox = () => {
  const files = useGetFiles();
  const { selected, setSelected } = useSelectable();

  const numSelected = useMemo(() => selected.length, [selected]);

  const status = useMemo(() => {
    if (numSelected === 0) return 'unchecked';
    if (numSelected === files.length) return 'checked';

    return 'indeterminate';
  }, [files, numSelected]);

  const isChecked = useMemo(() => status === 'checked' || status === 'indeterminate', [status]);

  const isIndeterminate = useMemo(() => status === 'indeterminate', [status]);

  const handleChange = () => {
    const newSelection = status === 'checked' ? [] : files.map(getFileKey);

    setSelected(newSelection);
  };

  return (
    <Checkbox
      title="Select all files"
      label={<TextDisplay>Selected {numSelected}</TextDisplay>}
      checked={isChecked}
      indeterminate={isIndeterminate}
      onChange={handleChange}
    />
  );
};

SelectAllCheckbox.displayName = 'SelectAllCheckbox';

export default memo(SelectAllCheckbox);
