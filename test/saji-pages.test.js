const test = require('ava')
const sajiPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => sajiPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(sajiPages('w'), 'w@zce.me')
  t.is(sajiPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
