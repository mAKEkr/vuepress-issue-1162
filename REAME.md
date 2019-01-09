# nothing to see here

This repo is a repro for https://github.com/vuejs/vuepress/issues/1162

To repro spurious warning use
`$ npm install`
`$ npm run docs:dev`

```
WARNING in ./docs/README.md
Module Warning (from ./node_modules/@vuepress/markdown-loader/index.js):

File for relative link "/ram/my-raml.html" does not exist.
(Resolved file: C:\tmp\vuepress-1162\docs\ram\my-raml.md)

 @ ./node_modules/@vuepress/core/.temp/internal/page-components.js 5:22-93
 @ ./node_modules/@vuepress/core/.temp/internal/routes.js
 @ ./node_modules/@vuepress/core/lib/app/app.js
 @ ./node_modules/@vuepress/core/lib/app/clientEntry.js
 @ multi ./node_modules/@vuepress/core/lib/app/clientEntry.js
 ```


MIT licensed
