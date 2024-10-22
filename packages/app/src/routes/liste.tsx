import { quotes } from '@pas-fute-fute/data';
import { Link, Meta, Title } from '@solidjs/meta';
import { A } from '@solidjs/router';
import { For } from 'solid-js';
import { Button } from '~/components/button';
import { Table, TableBody, TableCell, TableRow } from '~/components/table';

export default function List() {
  const amountOfPadding = Math.ceil(Math.log10(quotes.length));

  return (
    <div>
      <Title>Liste des expressions - PasFuteFute</Title>
      <Meta name="description" content="Le répertoire des expressions françaises pour décrire les moins futé·e·s." />
      <Link rel="canonical" href="https://pasfutefute.fr/liste" />

      <div class="max-w-800px mt-3 mx-auto">
        <Button as={A} href="/" variant="secondary">
          <div class="i-tabler-arrow-left text-lg mr-2" />
          Retour à l'accueil
        </Button>
      </div>

      <hr class="my-12" />

      <div class="max-w-800px mx-auto">

        <h2 class="text-xl font-semibold">
          Liste des expressions
        </h2>

        <p class="text-muted-foreground mb-8 text-base">
          Voici la liste des actuelles
          {' '}
          {quotes.length}
          {' '}
          expressions que vous pouvez copier-coller. Vous pouvez aider à en ajouter de nouvelles en
          {' '}
          <a
            href="https://github.com/CorentinTh/pas-fute-fute"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            contribuant directement sur GitHub
          </a>
          .
        </p>

        <Table>
          <TableBody>
            <For each={quotes}>
              {({ quote }, index) => (
                <TableRow>
                  <TableCell class="font-medium font-mono text-muted-foreground text-base">
                    { String(index()).padStart(amountOfPadding, '0')}
                  </TableCell>
                  <TableCell>{quote}</TableCell>
                </TableRow>
              )}
            </For>
          </TableBody>
        </Table>

        <Button onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} class="mt-12" variant="secondary">
          <div class="i-tabler-arrow-up text-lg mr-2" />
          Retour en haut
        </Button>

      </div>
    </div>
  );
}
