import type { Route } from "./+types/blog-post";
import { data } from "react-router";
import ReactMarkdown from "react-markdown";
import { getPost } from "../lib/posts.server";

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: loaderData.title },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const post = await getPost(params.slug);
    if (!post) throw data(null, { status: 404 });

    return { title: post.title, content: post.content };
}

export default function Blogpost({ loaderData }: Route.ComponentProps) {
    return(
        <article className="post">
            <h1>{loaderData.title}</h1>
            <ReactMarkdown>{loaderData.content}</ReactMarkdown>
        </article>
    );
}