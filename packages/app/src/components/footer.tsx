import type { Component } from 'solid-js';
import { Button } from './button';

export const Footer: Component = () => {
  return (
    <div class="bg-surface border-t border-border py-6 px-6 text-center text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-1">
      <div>
        Projet open-source créé et maintenu avec amour par
        {' '}
        <Button variant="link" as="a" href="https://corentin.tech" target="_blank" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">Corentin Thomasset</Button>
        .
      </div>
      <div>
        Code source disponible sur
        {' '}
        <Button variant="link" as="a" href="https://github.com/CorentinTh/pas-fut-fute" target="_blank" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">GitHub</Button>
        .
      </div>

    </div>
  );
};
