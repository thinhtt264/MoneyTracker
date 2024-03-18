import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

interface BearState {
  firstTimeLaunch: boolean;
  onSetFirstTimeLaunch: () => void;
}

const useAppStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        firstTimeLaunch: true,
        onSetFirstTimeLaunch: () =>
          set(
            () => ({ firstTimeLaunch: false }),
            false,
            'app/onSetFirstTimeLaunch',
          ),
      }),
      {
        name: 'app-storage',
        storage: createJSONStorage(() => AsyncStorage),
        partialize: state => ({ firstTimeLaunch: state.firstTimeLaunch }),
      },
    ),
  ),
);

export default useAppStore;
