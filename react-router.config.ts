import type { Config } from "@react-router/dev/config";
import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  
  async prerender({ getStaticPaths }) {
    const files = await readdir("./content/posts");

    const numbers = await Promise.all(
      files
        .filter((f) => f.endsWith(".md"))
        .map(async (f) => {
          const raw = await readFile(`./content/posts/${f}`, "utf-8");
          const { data } = matter(raw);
          return data.number;
        })
    );

    return [
      ...getStaticPaths(),
      ...numbers.map((n) => `/blog/${n}`)
    ];
  }
} satisfies Config;
