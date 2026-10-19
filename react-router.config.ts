import type { Config } from "@react-router/dev/config";
import { readdir, readFile } from "node:fs/promises";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  
  async prerender({ getStaticPaths }) {
    const files = (await readdir("./content/posts")).filter((f) =>
      f.endsWith(".md")
    );

    const numbers = await Promise.all(
      files.map(async (f) => {
        const raw = await readFile(`./content/posts/${f}`, "utf-8");
      })
    );

    return [
      ...getStaticPaths(),
      ...numbers.map((n) => `/blog/${n}`)
    ];
  }
} satisfies Config;
