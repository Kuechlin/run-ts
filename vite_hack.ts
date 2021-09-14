import chalk from "chalk";
import { promises as fs } from "fs";

async function main() {
    const umdPath = "./node_modules/@babel/standalone/babel.js";
    let code = await fs.readFile(umdPath, "utf-8");
    // dirty fix a rollup error in build, don't know why
    code = code.replace('process.env = {};', "// process.env = {};");
    await fs.writeFile(umdPath, code);

    console.log(chalk.green("success"), "hack > @babel/standalone");
}

main().catch(console.error);