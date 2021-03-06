var request = require('axios')
var when = require('when')
var cache = require('../cache')

// Authenticate as a registered attendee. Returns a promise.
exports.login = function(credentials) {
  this.logout()

  var url = this.apiRoot() + 'api/authenticate.json'
  var performCaching = this.performCaching

  return request.post(url, credentials).then(function(response) {
    if (performCaching) {
      cache.user_details = JSON.stringify(response.data)
    }

    cache.credentials = JSON.stringify({
      attendee_token: response.data.access_token
    })
  })
}

// Logout. Returns a promise.
exports.logout = function() {
  return when.promise(function(resolve, reject) {
    cache.clear()
    resolve()
  })
}

// Returns the current user object.
exports.user = function(sync) {
  var data

  if (!this.performCaching || sync) {
    return this.sync('user_details')
  } else {
    return when.promise(function(resolve, reject) {
      data = cache.user_details
      resolve(data ? JSON.parse(data) : false)
    })
  }
}

// Returns the credentials for the current user.
exports.credentials = function() {
  return JSON.parse(cache.credentials)
}
