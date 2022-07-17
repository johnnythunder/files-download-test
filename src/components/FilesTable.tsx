import { useState, memo } from 'react';
import { Checkbox, Table, THead, TRow, THeader, TBody, TData } from './ui';
import useGetFiles from '../hooks/useGetFiles';
import { titleize } from '../utils/string';
import useDownloadFiles from '../hooks/useDownloadFiles';
import fileDownload from '../icons/icon-file-download.svg';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 24px;
  padding: 16px 0;
  font-size: 1.4rem;
`;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px 4px 4px;
  font-size: inherit;
  background: none;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: var(--gray-30);
  }

  &::before {
    content: '';
    display: block;
    height: 24px;
    width: 24px;
    background: url(${fileDownload});
    background-size: cover;
  }

  &:disabled::before {
    opacity: 0.25;
  }
`;

const FilesTable = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const files = useGetFiles();
  const downloadFiles = useDownloadFiles();

  const handleChange = (checked: boolean, fileName: string) => {
    const newSelected = checked ? [...selected, fileName] : selected.filter((f) => f !== fileName);

    setSelected(newSelected);
  };

  const handleSelectAllChange = (checked: boolean) => {
    const newSelected = checked ? files.map((f) => f.name) : [];

    setSelected(newSelected);
  };

  const handleDownload = () => {
    const filesToDownload = files.filter((f) => selected.includes(f.name));

    downloadFiles(filesToDownload);
  };

  return (
    <>
      <Header>
        <Checkbox
          label="Select all"
          title="Select all files"
          checked={selected.length === files.length}
          onChange={handleSelectAllChange}
        />

        <DownloadButton disabled={!selected.length} onClick={handleDownload}>
          Download Selected
        </DownloadButton>
      </Header>
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
    </>
  );
};

FilesTable.displayName = 'FilesTable';

export default memo(FilesTable);
