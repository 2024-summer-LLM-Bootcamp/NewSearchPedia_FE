import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: { pk: 0, email: '', name: '' },
      isLoadingUser: false,

      setUser: (user) => set({ user }),
      resetUser: () => {
        set({ user: { pk: 0, email: '', name: '' } });
      },
      setIsLoadingUser: (value) => {
        set({ isLoadingUser: value });
      },
    }),
    {
      name: 'user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useUserStore;
