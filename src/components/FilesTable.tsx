import { memo } from 'react';
import { Table, THead, TRow, THeader, TBody, TData } from './ui';

const files = [
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
            <TData>[X]</TData>
            <TData>{file.name}</TData>
            <TData>{file.device}</TData>
            <TData>{file.path}</TData>
            <TData>{file.status}</TData>
          </TRow>
        ))}
      </TBody>
    </Table>
  );
};

FilesTable.displayName = 'FilesTable';

export default memo(FilesTable);
