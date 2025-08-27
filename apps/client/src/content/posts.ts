export type PostMeta = {
  title: string;
  date: string; // ISO: "YYYY-MM-DD"
  excerpt?: string;
  tags?: string[];
  image?: string;
  draft?: boolean;
  [key: string]: unknown;
};

// Type for the imported MDX modules
type MdxModule = { meta: PostMeta };

// Finds all MDX files under /src/content/blog at build/dev time.
// {eager: true} means the files are imported immediately, not lazily.
const modules = import.meta.glob("/src/content/blog/*.mdx", { eager: true });

export type PostListItem = PostMeta & { slug: string };

export const posts: PostListItem[] = Object.entries(modules)
  .map(([path, mod]) => {
    const m = mod as unknown as MdxModule;
    const slug = path
      .split("/")
      .pop()!
      .replace(/\.mdx$/, "");
    return { slug, ...m.meta };
  })
  .filter((p) => !p.draft) // hide drafts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
