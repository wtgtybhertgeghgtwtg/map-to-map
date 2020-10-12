import mapToMap from '../src';

describe('mapToMap', () => {
  describe('without "mapper"', () => {
    it('creates a map from an object.', () => {
      const object = {bar: 'one', foo: 2};
      const map = mapToMap(object);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('one');
      expect(map.get('foo')).toBe(2);
    });

    it('creates a map from a Map.', () => {
      const object = new Map<string, number | string>([
        ['bar', 'one'],
        ['foo', 2],
      ]);
      const map = mapToMap(object);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('one');
      expect(map.get('foo')).toBe(2);
    });
  });

  describe('with "mapper"', () => {
    it('creates a map from an object.', () => {
      const object = {bar: 'one', foo: 2};
      const map = mapToMap(object, (value, key) => `"${key}" is ${value}.`);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('"bar" is one.');
      expect(map.get('foo')).toEqual('"foo" is 2.');
    });

    it('creates a map from a Map.', () => {
      const object = new Map<string, number | string>([
        ['bar', 'one'],
        ['foo', 2],
      ]);
      const map = mapToMap(object, (value, key) => `"${key}" is ${value}.`);
      expect(map.size).toBe(2);
      expect(map.get('bar')).toEqual('"bar" is one.');
      expect(map.get('foo')).toEqual('"foo" is 2.');
    });
  });
});
