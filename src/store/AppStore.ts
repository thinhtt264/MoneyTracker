import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  firstTimeLaunch: boolean;
  onSetFirstTimeLaunch: () => void;
}

const useAppStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        firstTimeLaunch: true,
        onSetFirstTimeLaunch: () => set(() => ({ firstTimeLaunch: false })),
      }),
      {
        name: 'app-storage',
      },
    ),
  ),
);

export default useAppStore;
