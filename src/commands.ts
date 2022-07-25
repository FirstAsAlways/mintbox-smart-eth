import { Command } from "commander";
const program = new Command();

// commands
import init from "@commands/init";

program
  .name("mintbox")x
  .description("CLI to quickly create a new NFT project")
  .version("0.0.1");

program
  .command("init")
  .description("init a NFT project from the template")
  .action((str, options) => {});

program.parse(process.argv);

export default program;
