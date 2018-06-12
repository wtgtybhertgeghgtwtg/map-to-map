// @flow
import mapToMap from '../src';

describe('mapToMap', () => {
  describe('invariants', () => {
    it.each([undefined, 'not an object', null])(
      'throws if "obj" is %s.',
      obj => {
        expect(() => mapToMap(obj)).toThrow(
          '"obj" must be a Map or an object map.',
        );
      },
    );

    it('throws if "mapper" is not a function or undefined.', () => {
      // $FlowFixMe
      expect(() => mapToMap({}, 'Neither a function nor undefined.')).toThrow(
        '"mapper" must be a function or undefined.',
      );
    });
  });

  describe('without "mapper"', () => {
    it('creates a map from an object.', () => {
      const obj = {bar: 'one', foo: 2};
      const map = mapToMap(obj);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('one');
      expect(map.get('foo')).toBe(2);
    });

    it('creates a map from a Map.', () => {
      const obj = new Map([['bar', 'one'], ['foo', 2]]);
      const map = mapToMap(obj);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('one');
      expect(map.get('foo')).toBe(2);
    });
  });

  describe('with "mapper"', () => {
    it('creates a map from an object.', () => {
      const obj = {bar: 'one', foo: 2};
      const map = mapToMap(obj, (value, key) => `"${key}" is ${value}.`);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('"bar" is one.');
      expect(map.get('foo')).toEqual('"foo" is 2.');
    });

    it('creates a map from a Map.', () => {
      const obj = new Map([['bar', 'one'], ['foo', 2]]);
      const map = mapToMap(obj, (value, key) => `"${key}" is ${value}.`);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('"bar" is one.');
      expect(map.get('foo')).toEqual('"foo" is 2.');
    });
  });
});
