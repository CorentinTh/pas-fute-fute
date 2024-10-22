import { ColorModeProvider, ColorModeScript, createLocalStorageManager } from '@kobalte/core/color-mode';
import { Meta, MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';

import { Suspense } from 'solid-js';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Toaster } from './components/sonner';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import './app.css';

function Metas() {
  return (
    <>
      <Title>PasFuteFute - Les expressions pour les moins futé·e·s.</Title>
      <Meta name="description" content="Le répertoire des expressions françaises pour décrire les moins futé·e·s." />

      <Meta property="og:title" content="PasFuteFute - Les expressions pour les moins futé·e·s." />
      <Meta property="og:description" content="Le répertoire des expressions françaises pour décrire les moins futé·e·s." />
      <Meta property="og:url" content="https://pasfutefute.fr/" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://pasfutefute.fr/og-image.png" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:alt" content="PasFuteFute - Les expressions pour les moins futé·e·s." />
      <Meta property="og:site_name" content="PasFuteFute" />
      <Meta property="og:locale" content="fr_FR" />

      <Meta property="twitter:card" content="summary_large_image" />
      <Meta property="twitter:url" content="https://pasfutefute.fr/" />
      <Meta property="twitter:title" content="PasFuteFute - Les expressions pour les moins futé·e·s." />
      <Meta property="twitter:description" content="Le répertoire des expressions françaises pour décrire les moins futé·e·s." />
      <Meta property="twitter:image" content="https://pasfutefute.fr/og-image.png" />
      <Meta property="twitter:image:alt" content="PasFuteFute - Les expressions pour les moins futé·e·s." />
      <Meta property="twitter:creator" content="@cthmsst" />
    </>
  );
}

export default function App() {
  const initialColorMode = 'light';
  const colorModeStorageKey = 'pff_color_mode';
  const localStorageManager = createLocalStorageManager(colorModeStorageKey);

  return (
    <Router
      children={<FileRoutes />}
      root={props => (
        <MetaProvider>
          <Metas />

          <Toaster />
          <ColorModeScript storageType={localStorageManager.type} storageKey={colorModeStorageKey} initialColorMode={initialColorMode} />
          <ColorModeProvider
            initialColorMode={initialColorMode}
            storageManager={localStorageManager}
          >
            <div class="min-h-svh font-sans text-sm font-400 flex flex-col">
              <Header />

              <div class="flex-1 px-6 pb-20 ">
                <Suspense>
                  {props.children}
                </Suspense>
              </div>

              <Footer />
            </div>
          </ColorModeProvider>
        </MetaProvider>
      )}
    />
  );
}
