import slugify from "react-slugify";

export function toSlug(title: string) {
    return slugify(title.replace(/['’]/g, ""));
}