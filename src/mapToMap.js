// @flow
/* eslint-disable no-redeclare */
import assert from 'assert';
import isobject from 'isobject';

declare function mapToMap<Value, VMap: {[key: string]: Value}>(
  obj: VMap,
): Map<string, Value>;

declare function mapToMap<Value, VMap: {[key: string]: Value}, Result>(
  obj: VMap,
  mapper: (value: Value, key: string) => Result,
): Map<string, Result>;

export default function mapToMap<Value, VMap: {[key: string]: Value}, Result>(
  obj: VMap,
  mapper?: (value: Value, key?: string) => Result,
) {
  // This wording is confusing.
  assert(isobject(obj), '"obj" must be an object map.');
  assert(
    ['function', 'undefined'].includes(typeof mapper),
    '"mapper" must be a function or undefined.',
  );
  const entries = Object.entries(obj);
  // Normally I'd just have `mapper` default to an identity function, this saves an iteration.
  if (typeof mapper === 'undefined') {
    return new Map(entries);
  }
  // $FlowFixMe
  return new Map(entries.map(([key, value]) => [key, mapper(value, key)]));
}
