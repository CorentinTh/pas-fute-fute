import { Meta, Title } from '@solidjs/meta';
import { A } from '@solidjs/router';
import { Button } from '~/components/button';

export default function NotFound() {
  return (
    <div>
      <Title>404 - Page non trouvée - PasFuteFute</Title>
      <Meta name="robots" content="noindex" />

      <hr class="my-12" />

      <main class="flex flex-col items-center justify-center mt-6">

        <div class="text-3xl font-light text-muted-foreground">404</div>
        <h1 class="font-semibold text-lg my-2">Cette page n'existe pas</h1>
        <p class="text-muted-foreground">La page que vous cherchez n'existe pas.</p>
        <p class="text-muted-foreground">Vérifiez l'URL ou retournez à la page d'accueil.</p>
        <Button as={A} href="/" class="mt-4" variant="secondary">
          <div class="i-tabler-arrow-left mr-2" />
          Retour à l'accueil
        </Button>
      </main>
    </div>
  );
}
