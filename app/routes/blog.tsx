import type { Route } from "./+types/blog";
import { getAllPosts } from "../lib/posts.server"
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Blog" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader() {
    const posts = await getAllPosts();

    return posts
        .map(({ number, title }) => ({ number, title }))
        .sort((a, b) => b.number - a.number);
}

export default function Blog({ loaderData }: Route.ComponentProps) {
    return (
        <div className="postslist">
            <ul>
                {loaderData.map((post => (
                    <li key={post.number}>
                        <Link to={`/blog/${post.number}`}>
                            #{post.number}: {post.title}
                        </Link>
                    </li>
                )))}
            </ul>
        </div>
    );
}
