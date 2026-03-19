import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
      remarkPlugins: [remarkMath, remarkDirective],
      // Place it at first, it should be executed before the syntax highlighter
      rehypePlugins: (v) => [rehypeKatex, ...v],
  },
  lastModifiedTime: "git"
});

