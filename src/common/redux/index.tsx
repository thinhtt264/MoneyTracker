import React, { createRef, forwardRef, useImperativeHandle } from 'react';
import { AppDispatch, RootState } from 'src/store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PersistState } from 'redux-persist/es/types';
import { AppState } from 'src/models/App';
import { PersistPartial } from 'redux-persist/es/persistReducer';

export const useAppDispatch = () => useDispatch<AppDispatch | any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type ActionBase<T = any> = {
  type: string;
  payload?: T;
};
type RXStoreType = {
  dispatch: (action: any) => any;
  getState: <K extends keyof RootState>(selector: K) => RootState[K];
};

const storeRef = createRef<RXStoreType>();

export const RXStore = forwardRef((_, ref) => {
  const dispatchRx = useAppDispatch();
  const store = useAppSelector(x => x);
  useImperativeHandle(
    storeRef,
    () => ({
      dispatch: (action: ActionBase) => {
        dispatchRx(action);
      },
      getState: <K extends keyof RootState>(selector: K) => {
        if (selector === '_persist') {
          return store[selector] as unknown as ({
            app: AppState & PersistPartial;
          } & PersistPartial)[K];
        }
        return store[selector] as RootState[K];
      },
    }),
    [dispatchRx, store],
  );
  return null;
});

export const dispatch = (action: any): any => {
  if (storeRef.current) {
    storeRef.current.dispatch(action);
  }
};
export function getState<K extends keyof RootState>(selector: K): RootState[K] {
  if (storeRef.current) {
    return storeRef.current.getState(selector);
  }
  return {} as RootState[K];
}
