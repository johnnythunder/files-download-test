import { useCallback } from "react";
import type { FileT } from "../types/File";

const useDownloadFiles = () =>
  useCallback((files: FileT[]) => {
    const formattedFiles = files
      .reduce(
        (output, current) => `${output}\n${current.device}: ${current.path}`,
        ""
      )
      .trim();

    alert(formattedFiles);
  }, []);

export default useDownloadFiles;
