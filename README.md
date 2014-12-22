# attendease-js

Official JavaScript/Node SDK for [Attendease](https://attendease.com/).

### Installation

Install with [npm](https://www.npmjs.org/), [component(1)](http://component.io) or [bower](http://bower.io/) (recommended).

```
$ bower install attendease
```

### Getting Started

If in Node or using a CommonJS style loader, simply require the module and initialize a client.

```javascript
attendease = require('attendease')('event-subdomain')
```

If in the browser, attendease-js occupies an `Attendease` global that you can use to initialize a client.

```javascript
attendease = Attendease('event-subdomain')
```

### Authentication

```javascript
// authenticate as an attendee
attendease.login({
  email: '[email]',
  password: '[password]'
})

// user details object
attendease.user()

// logout
attendease.logout()
```

### Read API

```javascript
// fetch event details (WIP)
attendease.eventDetails()

// fetch user details (WIP)
attendease.userDetails()

// fetch presenters
attendease.presenters()

// fetch sessions
attendease.sessions()

// fetch sessions mapped out as instances
attendease.instances()

// fetch sponsors (WIP)
attendease.sponsors()

// fetch website content items (WIP)
attendease.webContent()

// fetch mobile content items (WIP)
attendease.mobileContent()
```

### Write API

```javascript
// like an item (WIP)
attendease.like({
  type: 'presenter',
  id: '[presenterId]'
})

// unlike an item (WIP)
attendease.unlike('[itemId]')

// rate an item (WIP)
attendease.rate({
  type: 'session',
  id: '[sessionId]',
  rating: 4
})

// schedule an instance (WIP)
attendease.schedule('[instanceId]')

// unschedule an instance (WIP)
attendease.unschedule('[instanceId]')
```
