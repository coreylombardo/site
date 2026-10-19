import { 
    readdir, 
    readFile
} from "node:fs/promises";
import matter from "gray-matter";

const POSTS_DIR = "./content/posts";

export async function getAllPosts() {
    const files = (await readdir(POSTS_DIR)).filter((file) => file.endsWith(".md"));

    return Promise.all(
        files.map(async (file) => {
            const raw = await readFile(`${POSTS_DIR}/${file}`, "utf-8");
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

    return posts.find((post) => String(post.number) === number);
}