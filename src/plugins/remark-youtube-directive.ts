import { visit } from 'unist-util-visit'

function youtubeDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'leafDirective' && node.name === 'youtube') {
        const id =
          node.attributes?.id ||
          node.attributes?.['#'] ||
          node.attributes?.[''] ||
          node.label ||
          ''
        const start = node.attributes?.start || ''
        const end = node.attributes?.end || ''

        node.type = 'html'
        node.value = `<YouTube id="${id}"${start ? ` start="${start}"` : ''}${end ? ` end="${end}"` : ''} />`
      }
    })
  }
}

export default youtubeDirective
