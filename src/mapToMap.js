// @flow
/* eslint-disable no-redeclare */
import invariant from 'assert';
import isobject from 'isobject';

declare function mapToMap<Value, VMap: {[key: string]: Value}>(
  obj: VMap | Map<string, Value>,
): Map<string, Value>;

declare function mapToMap<Value, VMap: {[key: string]: Value}, Result>(
  obj: VMap | Map<string, Value>,
  mapper: (value: Value, key: string) => Result,
): Map<string, Result>;

export default function mapToMap(obj, mapper) {
  invariant(isobject(obj), '"obj" must be a Map or an object map.');
  invariant(
    ['function', 'undefined'].includes(typeof mapper),
    '"mapper" must be a function or undefined.',
  );
  const entries = obj instanceof Map ? obj.entries() : Object.entries(obj);
  // Normally I'd just have `mapper` default to an identity function, but this saves an iteration.
  if (typeof mapper === 'undefined') {
    return new Map(entries);
  }
  const map = new Map();
  for (const [key, value] of entries) {
    map.set(key, mapper(value, key));
  }
  return map;
}
