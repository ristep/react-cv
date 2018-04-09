# vue-cv

CV &amp; Resume created with Vue and JSON

Vue is best javascript framework I’ve ever been learned.

For that reason, I decided to make my CV framed in Vue.

An online live demo is [here](http://arso-cv.us.to/).

## Installation

```sh
mkdir vue-cv
cd vue-cv
```

Clone this [git](https://github.com/ristep/vue-cv.git) or extract [.zip](https://github.com/ristep/vue-cv/archive/master.zip) in created `vue-cv`, then:

```sh
yarn
yarn serve
```

If don't have yarn install it with this:

```sh
sudo apt-get update
sudo apt-get install yarn
```

For other than Ubuntu/Debian see [this article](https://yarnpkg.com/lang/en/docs/install/)

For production environments...

```sh
yarn run buld
```

### Server side

Put [this](https://github.com/ristep/vue-cv/tree/master/src/server-side) files on some web server with .php
and change `baseURL: "http://capi.rp/",` as needet, in [ajax-axios.js](https://github.com/ristep/vue-cv/blob/master/src/ajax-axios.js).

### Development

Want to contribute? Great! :)

### Todos

- Multi user features.
- Adding config panel.
- Some editor for `cv.json`.
- Write some Tests.
- Add Night Mode :)
- React version

### License

[MIT](https://opensource.org/licenses/MIT)
