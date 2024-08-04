import { GetRandomNumber, InternalImport } from './utils';

describe('Test Utils', () => {
  test('Test Internal Import', () => {
    expect(InternalImport()).toBe('Internal Import');
  });

  test('Get Random Number', () => {
    expect(GetRandomNumber()).toBeLessThanOrEqual(1);
  });
});
