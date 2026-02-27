import type { MDXComponents } from 'mdx/types'
import { MermaidZoom } from './components/mermaid-zoom'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    figure: ({ className, children, ...props }: any) => {
      if (className?.includes('mermaid')) {
        return <MermaidZoom>{children}</MermaidZoom>
      }
      return <figure className={className} {...props}>{children}</figure>
    },
  }
}
