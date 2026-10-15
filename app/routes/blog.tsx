import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Blog" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Blog() {
    return <span>Blog has not been implemented yet. Please return when I implement an epic backend.</span>
}