import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core/color-mode';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Toaster } from './components/sonner';
import { config } from './libs/config';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import './app.css';

export default function App() {
  const initialColorMode = 'light';
  const colorModeStorageKey = 'pff_color_mode';
  const localStorageManager = createLocalStorageManager(colorModeStorageKey);

  return (
    <Router
      root={props => (
        <>
          <Suspense>
            <Toaster />
            <ColorModeScript storageType={localStorageManager.type} storageKey={colorModeStorageKey} initialColorMode={initialColorMode} />
            <ColorModeProvider
              initialColorMode={initialColorMode}
              storageManager={localStorageManager}
            >
              <div class="min-h-svh font-sans text-sm font-400 flex flex-col">
                <Header />
                <div class="flex-1 p-6 pb-20 ">
                  {props.children}
                </div>

                <Footer />
              </div>
            </ColorModeProvider>
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
