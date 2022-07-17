import { memo } from 'react';
import { Card, Table, THead, TRow, THeader, TBody, TextTitle } from '../ui';
import DownloadButton from './DownloadButton';
import FileRow from './FileRow';
import SelectAllCheckbox from './SelectAllCheckbox';
import { SelectableProvider } from '../../data/SelectableContext';
import useGetFiles from '../../hooks/useGetFiles';
import { getFileKey } from './utils';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 48px;
  padding: 16px 8px 4px;
  border-bottom: 1px solid var(--gray-50);
`;

const FilesTable = () => {
  const files = useGetFiles();

  return (
    <SelectableProvider>
      <Card flexDirection="column">
        <Header>
          <SelectAllCheckbox />
          <DownloadButton />
        </Header>
        <Table>
          <THead>
            <TRow>
              <THeader />
              <THeader>
                <TextTitle>Name</TextTitle>
              </THeader>
              <THeader>
                <TextTitle>Device</TextTitle>
              </THeader>
              <THeader>
                <TextTitle>Path</TextTitle>
              </THeader>
              <THeader>
                <TextTitle>Status</TextTitle>
              </THeader>
            </TRow>
          </THead>
          <TBody>
            {files.map((file) => (
              <FileRow file={file} key={getFileKey(file)} />
            ))}
          </TBody>
        </Table>
      </Card>
    </SelectableProvider>
  );
};

FilesTable.displayName = 'FilesTable';

export default memo(FilesTable);
