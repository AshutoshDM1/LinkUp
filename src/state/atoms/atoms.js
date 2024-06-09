import { atom, selector } from "recoil";
import { getChatPosts } from "../../services/api";

export const chatAtom = atom({
  key: 'chatAtom', 
  default: selector({
    key: 'chatAtomSelector',
    get: async () => { 
      const data = await getChatPosts();
      return data; 
    },
  }),  
});
