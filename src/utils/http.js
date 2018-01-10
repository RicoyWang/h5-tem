/* global env */

export const isSafeMethod = (method) => {
  return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
}

export const allowOrigin = (url) => {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
  var host = env.host // host + port
  var protocol = document.location.protocol
  var srOrigin = '//' + host
  var origin = protocol + srOrigin
    // Allow absolute or scheme relative URLs to same origin
  return (url === origin || url.slice(0, origin.length + 1) === origin + '/') ||
        (url === srOrigin || url.slice(0, srOrigin.length + 1) === srOrigin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url))
}
