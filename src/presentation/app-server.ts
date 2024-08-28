import { CreateFile } from "../domain/use-cases/create-file.use-case";
import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
  name: string;
  destination: string;
}

export class AppServer {
  static run({ base, limit, show, name, destination }: RunOptions) {
    console.log("Server running..");
    const table = new CreateTable().execute({ base, limit });
    const fileCreated = new CreateFile().execute({
      fileName: name,
      filePath: `${destination}/table-${base}`,
      contentFile: table,
    });

    if (fileCreated) console.log("File created !");
    if (show) console.log(table);
  }
}
