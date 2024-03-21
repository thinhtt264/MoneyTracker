import React, { createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { i18next } from '@common';
import { AppNavigation } from '@navigation';
import { useAppStore } from '@store';
import { PortalProvider } from '@gorhom/portal';

const StoreContext = createContext(useAppStore);

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PortalProvider>
        <SafeAreaProvider>
          <StoreContext.Provider value={useAppStore}>
            <I18nextProvider i18n={i18next}>
              <AppNavigation />
            </I18nextProvider>
          </StoreContext.Provider>
        </SafeAreaProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
