import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUser } from './getUser';

describe('getUser', () => {
  test('should return user', () => {
    const state: DeepPartial<StateSchema> = {
      user: {},
    };
    expect(getUser(state as StateSchema)).toEqual({});
  });
});
