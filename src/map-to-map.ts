/**
 * Converts an object or Map to a Map.
 *
 * @example
 * ```
 * const result = mapToMap(
 *   {bar: {score: 2}, foo: {score: 7}},
 * );
 * // Returns `{score: 7}`.
 * result.get('foo');
 * ```
 *
 * @example
 * ```
 * const result = mapToMap(
 *   new Map([
 *     ['bar', {score: 2}],
 *     ['foo', {score: 7}],
 *   ]),
 * );
 * // Returns `{score: 2}`.
 * result.get('bar');
 * ```
 *
 * @param object - The object or Map.
 * @returns The resultant Map.
 */
function mapToMap<Value>(
  object: {[key: string]: Value} | Map<string, Value>,
): Map<string, Value>;

/**
 * Converts an object or Map to a Map, with the values run through a mapper function.
 *
 * @example
 * ```
 * const result = mapToMap(
 *   {bar: {score: 2}, foo: {score: 7}},
 *   (value, key) => `${key}'s score is ${value.score}.`,
 * );
 * // Returns "foo's score is 7.".
 * result.get('foo');
 * ```
 *
 * @example
 * ```
 * const result = mapToMap(
 *   new Map([
 *     ['bar', {score: 2}],
 *     ['foo', {score: 7}],
 *   ]),
 *   (value, key) => `${key}'s score is ${value.score}.`,
 * );
 * // Returns "bar's score is 2.".
 * result.get('bar');
 * ```
 *
 * @param object - The object or Map.
 * @param mapper - The mapper function.
 * @returns The resultant Map.
 */
function mapToMap<Value, Result>(
  object: {[key: string]: Value} | Map<string, Value>,
  mapper: (value: Value, key: string) => Result,
): Map<string, Result>;

function mapToMap<Value, Result>(
  object: {[key: string]: Value} | Map<string, Value>,
  mapper?: (value: Value, key: string) => Result,
): Map<string, Result | Value> {
  const entries =
    object instanceof Map ? object.entries() : Object.entries(object);
  if (typeof mapper === 'undefined') {
    return new Map(entries);
  }
  const map = new Map();
  for (const [key, value] of entries) {
    map.set(key, mapper(value, key));
  }
  return map;
}

export default mapToMap;
