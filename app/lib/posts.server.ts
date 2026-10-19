import matter from "gray-matter";

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
            content,
        };
    }));
}

export async function getPost(number: string) {
    const posts = await getAllPosts();

    return posts.find((post) => String(post.number) === number);
}