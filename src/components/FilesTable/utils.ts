import type { SelectionId } from '../../data/SelectableContext';
import type { FileT } from '../../types/File';

export const getFileKey = ({ name, device, path }: FileT) => `${name}|${device}|${path}`;

export const getFileByKey = (files: FileT[], key: SelectionId) => files.find((file) => getFileKey(file) === key);
