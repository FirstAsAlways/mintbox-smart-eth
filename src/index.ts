import { Command } from "commander";
import path from "path";
import { fileURLToPath } from "url";
import fse from "fs-extra";

const program = new Command();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .name("mintbox")
  .description("CLI to quickly create a new NFT project")
  .version("0.0.1");

program
  .command("init")
  .description("init a NFT project from the template")
  .action(() => {
    fse.copy(path.join(__dirname, "bin"), "./", (err: Error) => {
      err ? console.log(err) : console.log("Successfully installed!");
    });
  });

program.parse(process.argv);

export default program;
