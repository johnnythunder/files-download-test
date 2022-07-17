import { memo } from 'react';
import { TRow, TData, Checkbox, TextBody, Box, StatusOrb } from '../ui';
import { useIsSelected, useAddToSelection, useRemoveFromSelection } from '../../data/SelectableContext';
import { getFileKey } from './utils';
import { titleize } from '../../utils/string';
import type { FileT } from '../../types/File';

const FileRow = ({ file }: { file: FileT }) => {
  const id = getFileKey(file);

  const isChecked = useIsSelected(id);
  const addSelected = useAddToSelection();
  const removeSelected = useRemoveFromSelection();

  const handleChange = (checked: boolean) => {
    const selectionFn = checked ? addSelected : removeSelected;

    selectionFn(id);
  };

  return (
    <TRow selectable onClick={() => handleChange(!isChecked)} key={id}>
      <TData>
        <Checkbox checked={isChecked} title={file.name} onChange={handleChange} />
      </TData>
      <TData>
        <TextBody>{file.name}</TextBody>
      </TData>
      <TData>
        <TextBody>{file.device}</TextBody>
      </TData>
      <TData>
        <Box alignItems="center" justifyContent="space-between" flexGrow={1}>
          <TextBody>{file.path}</TextBody>
          {file.status === 'available' && <StatusOrb status="success" />}
        </Box>
      </TData>
      <TData>
        <TextBody>{titleize(file.status)}</TextBody>
      </TData>
    </TRow>
  );
};

FileRow.displayName = 'FileRow';

export default memo(FileRow);
