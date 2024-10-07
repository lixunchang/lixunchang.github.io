import { createContentLoader } from 'vitepress'
import { excerptNoTitleFn, formatTitle, formatDate, hideVueTemplateMdFn } from '../utils/data'

export default createContentLoader('**/**/*.md', {
  includeSrc: true,
  // render: true,
  excerpt: true, //excerptFn,
  transform(raw) {
    return raw
      .filter(hideVueTemplateMdFn)
      .map(({ url, frontmatter, excerpt, src, html }) => {
        return {
          title: formatTitle(frontmatter, src),
          url,
          excerpt: excerptNoTitleFn(excerpt),
          src,
          date: formatDate(frontmatter.date),
          tags: frontmatter.tags
        }
      })
      .sort((a, b) => b.date.time - a.date.time)
  }
})