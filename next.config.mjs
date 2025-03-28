import rehypeToc from '@jsdevtools/rehype-toc';
import createMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import moonlightTheme from './assets/moonlight.ii.json' with { type: 'json' };

const options = {
  keepBackground: true,
  theme: moonlightTheme,
};

const withMDX = createMDX({
  // Add markdown plugins here, if needed
  options: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug, [rehypeToc, {
      headings: ['h2', 'h3'],
    }]],
  }
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: process.env.NODE_ENV === 'production' ? '/ten-repo' : '',
  experimental: {
    mdxRs: false,
    // optimizePackageImports: ['shiki']
  },
  // transpilePackages: ['shiki']
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
