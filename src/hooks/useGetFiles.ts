import { useMemo } from 'react';
import type { FileT } from '../types/File';

// Would typically handle data fetching and throw a Promise
// so as to be caught by React.Suspense
const useGetFiles = () =>
  useMemo<FileT[]>(
    () => [
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
      {
        name: '7za.exe',
        device: 'Baratheon',
        path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
        status: 'scheduled',
      },
    ],
    []
  );

export default useGetFiles;
