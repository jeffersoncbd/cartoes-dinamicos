function getTag(content: string): [string, string] | [undefined, undefined] {
  const parts = content.split('}}')
  if (parts.length <= 1) {
    return [undefined, undefined]
  }
  const firstParts = parts[0].split('{{')
  if (firstParts.length <= 1) {
    return [undefined, undefined]
  }
  parts.shift()
  return [firstParts[1], parts.join('}}')]
}

export function processText(text: string): string[] {
  const tags: string[] = []
  let content: string | undefined = text
  while (content !== undefined) {
    const [tag, remaining] = getTag(content)
    content = remaining
    if (tag !== undefined && !tags.includes(tag)) {
      tags.push(tag)
    }
  }
  return tags
}
