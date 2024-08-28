import fs from "fs";

interface CreateFileUseCase {
  execute: (options: Options) => boolean;
}

interface Options {
  filePath?: string;
  fileName?: string;
  contentFile: string;
}

export class CreateFile implements CreateFileUseCase {
  execute({ fileName = "result", filePath = "tabla", contentFile }: Options) {
    try {
      fs.mkdirSync(filePath, { recursive: true });
      fs.writeFileSync(`${filePath}/${fileName}.txt`, contentFile);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
