// @flow
import mapToMap from '../src';

describe('mapToMap', () => {
  describe('invariants', () => {
    it('throws if "obj" is undefined.', () => {
      // $FlowFixMe
      expect(() => mapToMap()).toThrow('"obj" must be an object map.');
    });
    it('throws if "obj" is not an object.', () => {
      // $FlowFixMe
      expect(() => mapToMap('Not an object')).toThrow(
        '"obj" must be an object map.',
      );
    });
    it('throws if "obj" is null.', () => {
      // $FlowFixMe
      expect(() => mapToMap(null)).toThrow('"obj" must be an object map.');
    });
    it('throws if "mapper" is not a function or undefined.', () => {
      // $FlowFixMe
      expect(() => mapToMap({}, 'Neither a function nor undefined.')).toThrow(
        '"mapper" must be a function or undefined.',
      );
    });
  });

  describe('without "mapper"', () => {
    it('creates a map from "obj".', () => {
      const obj = {bar: 'one', foo: 2};
      const map = mapToMap(obj);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('one');
      expect(map.get('foo')).toEqual(2);
    });
  });

  describe('with "mapper"', () => {
    // Terrible test name.
    it('creates a map from "obj".', () => {
      const obj = {bar: 'one', foo: 2};
      const map = mapToMap(obj, (value, key) => `"${key}" is ${value}.`);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('"bar" is one.');
      expect(map.get('foo')).toEqual('"foo" is 2.');
    });
  });
});
