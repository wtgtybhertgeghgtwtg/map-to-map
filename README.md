# map-to-map

> Map an object (or Map) to a Map.

## Install

```
$ yarn add map-to-map
```

## Usage

```js
const mapToMap = require('map-to-map');

const map = mapToMap({propOne: 10, propTwo: 20}, (value) => value * value);
// Returns 100.
map.get('propOne');
```

## API

### mapToMap(object, mapper)

Returns a Map whose values are made from running the properties of `object` through `mapper`. If `object` is a `Map`, it'll map its entries, instead.

#### object

- Type: `object` | `Map`

An object or `Map`.

#### mapper(value, key)

- Type: `Function`

An optional mapper function.

## License

MIT © Matthew Fernando Garcia
