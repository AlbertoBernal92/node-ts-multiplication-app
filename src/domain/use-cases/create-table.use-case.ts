interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    //dependency injection
  }

  execute({ base, limit }: CreateTableOptions) {
    let outPutMessage = "";
    for (let i = 1; i <= limit; i++) {
      outPutMessage += `${base} x ${i} = ${base * i}\n`;
    }
    return outPutMessage;
  }
}
