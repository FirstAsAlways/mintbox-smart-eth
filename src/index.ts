import { Command } from "commander";
import path from "path";
import fse from "fs-extra";
const program = new Command();

// commands
// import init from "@commands/init";

program
  .name("mintbox")
  .description("CLI to quickly create a new NFT project")
  .version("0.0.1");

program
  .command("init")
  .description("init a NFT project from the template")
  .action((str, options) => {
    fse.copy(path.join(__dirname, "bin"), "../", (err: Error) => {
      err ? console.log(err) : console.log("Successfully installed!");
    });
  });

program.parse(process.argv);

export default program;
