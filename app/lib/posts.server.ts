import matter from "gray-matter";
import { toSlug } from "./slug";

const files = import.meta.glob("/content/posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>;

export async function getAllPosts() {
    return Object.values(files).map((raw => {
        const { data, content } = matter(raw);

        return {
            number: data.number as number,
            title: data.title as string,
            date: data.date as Date,
            content,
        };
    }));
}

export async function getPost(slug: string) {
    const posts = await getAllPosts();

    return posts.find((post) => String(toSlug(post.title)) === slug);
}