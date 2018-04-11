# map-to-map

> Map an object to a Map.

## Install

```
$ yarn add map-to-map
```

## Usage

```js
const mapToMap = require('map-to-map');

const map = mapToMap({propOne: 10, propTwo: 20}, value => value * value);
// Returns 100.
map.get('propOne');
```

## API

### mapToMap(obj, mapper)

Returns a Map whose values are made from running the properties of `obj` through `mapper`.

#### obj

* Type: `object`

An object.

#### mapper(value, key)

* Type: `Function`

An optional mapper function.

## License

MIT © Matthew Fernando Garcia
