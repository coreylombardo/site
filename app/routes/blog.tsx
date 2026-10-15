import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Blog" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Blog() {
    return <span>Blog has not been implemented yet. Please return when [THE WORLD ENDS]</span>
}
