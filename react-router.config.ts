import type { Config } from "@react-router/dev/config";
import { getAllPosts } from "./app/lib/posts.server";
import matter from "gray-matter";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  
  async prerender({ getStaticPaths }) {
    const posts = await getAllPosts();

    return [
      ...getStaticPaths(),
      ...posts.map((p) => `/blog/${p.number}`)
    ];
  }
} satisfies Config;
