import { parseArgs } from "node:util";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const { values } = parseArgs({
    options: {
        file: { type: "string", short: "f" },
    }
});

if (!values.file) {
    console.error("Missing --file");
    process.exit(1);
}

const path = resolve(values.file);

if (!existsSync(path)) {
    console.error(`File not found: ${path}`);
    process.exit(1);
}

const contents = readFileSync(path, "utf-8");
// do the stuff below here
// 
console.log(contents);