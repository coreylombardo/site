import type { Config } from "@react-router/dev/config";
import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { toSlug } from "./app/lib/slug";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  
  async prerender({ getStaticPaths }) {
    const files = (await readdir("./content/posts")).filter((f) =>
      f.endsWith(".md")
    );

    const slugs = await Promise.all(
      files.map(async (f) => {
        const raw = await readFile(`./content/posts/${f}`, "utf-8");
        const { title } = matter(raw).data;

        if (typeof title !== "string") {
          throw new Error(`${f} is missing a "title" in its frontmatter`);
        }

        return toSlug(title);
      })
    );

    return [
      ...getStaticPaths(),
      ...slugs.map((s) => `/blog/${s}`)
    ];
  }
} satisfies Config;
