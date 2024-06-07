import { selector } from 'recoil';
import { userAtom } from '../atoms/userAtom';

export const userNameSelector = selector({
  key: 'userNameSelector',
  get: ({ get }) => {
    const user = get(userAtom);
    return user ? user.name : 'Guest';
  },
});
