declare module "*.mdx" {
  import type { ComponentType } from "react";

  // Whatever fields you plan to use in your index/cards:
  export const meta: {
    title: string;
    date: string; // ISO string like "2025-08-27"
    excerpt?: string;
    tags?: string[];
    image?: string;
    draft?: boolean;
    [key: string]: unknown;
  };

  // The default export is the compiled MDX component
  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}
