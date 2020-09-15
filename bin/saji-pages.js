#!/usr/bin/env node

// console.log(process.argv)
/**
PS C:\study\lagou\saji-pages> saji-pages --sdfs sdfs
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\saji\\AppData\\Local\\Yarn\\Data\\link\\saji-pages\\bin\\saji-pages.js',
  '--sdfs',
  'sdfs',
  '--cwd',
  'C:\\study\\lagou\\saji-pages',
  '--gulpfile',
  'C:\\study\\lagou\\saji-pages\\lib\\index.js'
]
 */

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))

require('gulp/bin/gulp')
// console.log(process.argv)