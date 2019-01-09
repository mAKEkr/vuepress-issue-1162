const extRE = /\.raml$/

function buildPermalink (ramlFileName) {
  // inspired by https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/fileToPath.ts
  return `/raml/${ramlFileName.replace(extRE, '').replace(/\\/g, '/')}.html`
}


module.exports = {
  name: 'my-plugin',
  async additionalPages () {
    return [{
      permalink: buildPermalink('my-raml.raml'),
      // frontmatter: {}, -- for unknown reasons this is ignored in alpha 30
      // so instead we build a content that embeds frontmatter directly
      // See https://github.com/vuejs/vuepress/issues/1157
      content: '# custom raml\ncontent here'
    }]
  }
}