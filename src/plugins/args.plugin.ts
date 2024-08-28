import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yargsPlugin = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    description: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    description: "Show multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    description: "File name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    description: "Destination path",
  })
  .check((args, opts) => {
    if (args.b <= 0) throw "Base must be greater than 0";
    return true;
  })
  .parseSync();
