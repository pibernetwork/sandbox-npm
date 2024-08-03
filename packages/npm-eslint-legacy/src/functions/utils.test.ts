import { InternalImport } from './utils';

describe('Test Utils', () => {
  test('Test Internal Import', () => {
    expect(InternalImport()).toBe('Internal Import');
  });
});
