import { useState, memo } from 'react';
import { Checkbox, Table, THead, TRow, THeader, TBody, TData } from './ui';
import { titleize } from '../utils/string';

export type FileT = {
  name: string;
  device: string;
  path: string;
  status: 'available' | 'scheduled';
};

const files: FileT[] = [
  {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled',
  },

  {
    name: 'netsh.exe',
    device: 'Targaryen',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
    status: 'available',
  },

  {
    name: 'uxtheme.dll',
    device: 'Lannister',
    path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
    status: 'available',
  },

  {
    name: 'cryptbase.dll',
    device: 'Martell',
    path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
    status: 'scheduled',
  },

  { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' },
];

const FilesTable = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (checked: boolean, fileName: string) => {
    const newSelected = checked ? [...selected, fileName] : selected.filter((f) => f !== fileName);

    setSelected(newSelected);
  };

  return (
    <Table>
      <THead>
        <TRow>
          <THeader />
          <THeader>Name</THeader>
          <THeader>Device</THeader>
          <THeader>Path</THeader>
          <THeader>Status</THeader>
        </TRow>
      </THead>
      <TBody>
        {files.map((file) => (
          <TRow key={file.name}>
            <TData>
              <Checkbox
                title={file.name}
                checked={selected.includes(file.name)}
                onChange={(checked) => handleChange(checked, file.name)}
              />
            </TData>
            <TData>{file.name}</TData>
            <TData>{file.device}</TData>
            <TData>{file.path}</TData>
            <TData>{titleize(file.status)}</TData>
          </TRow>
        ))}
      </TBody>
    </Table>
  );
};

FilesTable.displayName = 'FilesTable';

export default memo(FilesTable);
