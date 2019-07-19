import Promise from 'promise-polyfill'

window.Promise = window.Promise || Promise

if (typeof window.fetch === 'undefined') {
  require('whatwg-fetch')
}
