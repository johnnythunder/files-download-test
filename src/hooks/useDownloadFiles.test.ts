import { renderHook, act } from '@testing-library/react-hooks';

import useDownloadFiles from './useDownloadFiles';
import type { FileT } from '../types/File';

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
];

const expectedFilesString = files.map(({ device, path }) => `${device}: ${path}`).join('\n');

describe('useDownloadFiles', () => {
  test('displays an alert with files', () => {
    const { result } = renderHook(() => useDownloadFiles());

    global.alert = jest.fn();

    act(() => {
      result.current(files);
    });

    expect(global.alert).toHaveBeenCalledWith(expectedFilesString);
  });
});
