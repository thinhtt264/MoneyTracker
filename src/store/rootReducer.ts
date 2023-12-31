import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCombineReducers, persistReducer } from 'redux-persist';
import { appReducer } from './action-slices';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: [],
};

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  blacklist: ['loadingApp'],
};

const searchPersistConfig = {
  key: 'search',
  storage: AsyncStorage,
  whitelist: ['searchRecentData'],
};

const rootReducer = persistCombineReducers(rootPersistConfig, {
  app: persistReducer(appPersistConfig, appReducer),
  //   auth: persistReducer(authPersistConfig, authReducer),
  //   home: homeReducer,
});

export default rootReducer;
