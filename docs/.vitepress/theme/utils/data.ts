
export const hideNavIndexFn = ({url})=>!['/tech/','/survive/','/thought/'].includes(url);
export const hideVueTemplateMdFn = ({src = ''})=>!src.startsWith('---\ntemplate: true');

export function excerptFn(file: { data: { [key: string]: any }; content: string; excerpt?: string }, options?: any) {
  // file.excerpt = file.content.split('<!-- DESC SEP -->')[1];
  file.excerpt = file.content.split('---')[0]
}

export function excerptNoTitleFn(excerpt: string = ''){
  return excerpt?.split('</h1>')[1].replaceAll('<img src="./../public/images', '<img src="/images')
}

export function formatTitle(frontmatter:  any, src: string = ''){
  if(frontmatter.title){
    return frontmatter.title;
  }
  const reg = /(?<=#).*?(?=\n)/;

  return src?.match(reg)?.[0]?.trim();
}

export function formatDate(raw: string){
  if(!raw){
    return {
      time: 0,
      string: ''
    }
  }
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('zh-Hans', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }
}