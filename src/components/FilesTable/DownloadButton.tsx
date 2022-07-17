import { useMemo, useCallback, memo } from 'react';
import { TextDisplay } from '../ui';
import { useSelectable } from '../../data/SelectableContext';
import useDownloadFiles from '../../hooks/useDownloadFiles';
import useGetFiles from '../../hooks/useGetFiles';
import type { FileT } from '../../types/File';
import fileDownload from '../../icons/icon-file-download.svg';
import { getFileByKey } from './utils';
import styled from 'styled-components';

const DownloadButtonBase = styled.button`
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
    background-color: var(--gray-20);
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

const DownloadButton = () => {
  const files = useGetFiles();
  const downloadFiles = useDownloadFiles();
  const { selected } = useSelectable();

  const selectedFiles = useMemo(() => selected.map((key) => getFileByKey(files, key)) as FileT[], [files, selected]);

  const handleClick = useCallback(() => {
    downloadFiles(selectedFiles);
  }, [selectedFiles, downloadFiles]);

  return (
    <DownloadButtonBase disabled={!selectedFiles.length} onClick={handleClick}>
      <TextDisplay>Download Selected</TextDisplay>
    </DownloadButtonBase>
  );
};

DownloadButton.displayName = 'DownloadButton';

export default memo(DownloadButton);
