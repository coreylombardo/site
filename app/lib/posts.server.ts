import { 
    readdir, 
    readFile
} from "node:fs/promises";
import matter from "gray-matter";

const POSTS_DIR = "./content/posts";

export async function getAllPosts() {
    const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith(".md"));

    return Promise.all(
        files.map(async (f) => {
            const raw = await readFile(`${POSTS_DIR}/${f}`, "utf-8");
            const { data, content } = matter(raw);

            return {
                number: data.number as number,
                title: data.title as string,
                content,
            };
        })
    );
}

export async function getPost(number: string) {
    const posts = await getAllPosts();

    return posts.find((p) => String(p.number) === number);
}