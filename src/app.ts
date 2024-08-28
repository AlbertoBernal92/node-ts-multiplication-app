import { yargsPlugin } from "./plugins/args.plugin";
import { AppServer } from "./presentation/app-server";

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: show, n: name, d: destination } = yargsPlugin;
  AppServer.run({ base, limit, show, name, destination });
}
