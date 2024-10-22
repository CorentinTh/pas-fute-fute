// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';
import { config } from './libs/config';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>PasFuteFute - Le répertoire des expressions françaises pour décrire les moins futé·e·s.</title>
          <meta name="description" content="Le répertoire des expressions françaises pour décrire les moins futé·e·s." />
          <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content="PasFuteFute" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="canonical" href="https://pasfutefute.fr/" />
          {assets}

          {config.plausible.isEnabled && (
            <script
              defer
              data-domain={config.plausible.domain}
              src={config.plausible.host}
            />
          )}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
