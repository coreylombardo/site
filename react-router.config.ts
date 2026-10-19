import type { Config } from "@react-router/dev/config";
import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";

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

        // error check because idk why cloudflare hates me, can delete later maybe
        const { number } = matter(raw).data;

        if (typeof number !== "number") {
          throw new Error(`${f} is missing a numeric "number" in its frontmatter`);
        }

        return number;
      })
    );

    return [
      ...getStaticPaths(),
      ...numbers.map((n) => `/blog/${n}`)
    ];
  }
} satisfies Config;
