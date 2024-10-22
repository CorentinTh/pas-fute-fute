import type { DropdownMenuTriggerProps } from '@kobalte/core/dropdown-menu';
import type { TooltipTriggerProps } from '@kobalte/core/tooltip';
import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { Button } from './button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

export const Header: Component = () => {
  return (
    <div class="mt-2 sm:mt-8 px-6 pt-6">
      <div class="max-w-800px mx-auto w-full">
        <div class="i-custom-logo size-15 mb-2" />

        <div class="flex items-center sm:items-baseline gap-2 justify-between">
          <A href="/">
            <h1 class="font-serif font-700 text-3xl sm:text-4xl  ">
              Pas
              <span class="text-primary">FuteFute</span>
              ...
            </h1>
          </A>

          <div class="flex gap-1 items-center">
            <Tooltip>
              <TooltipTrigger
                as={(props: TooltipTriggerProps) => (
                  <Button
                    variant="ghost"
                    class="text-2xl px-0 size-9 hidden md:inline-flex text-muted-foreground transition"
                    as={A}
                    href="https://github.com/CorentinTh/pas-fute-fute"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    {...props}
                  >
                    <div class="i-tabler-brand-github" />
                  </Button>
                )}
              />

              <TooltipContent>
                Dépôt GitHub
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                as={(props: TooltipTriggerProps) => (
                  <Button
                    variant="ghost"
                    class="text-2xl px-0 size-9 hidden md:inline-flex text-muted-foreground transition"
                    as={A}
                    href="https://buymeacoffee.com/cthmsst"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Soutenir le projet"
                    {...props}
                  >
                    <div class="i-tabler-pig-money" />
                  </Button>
                )}
              />

              <TooltipContent>
                Soutenir le projet
              </TooltipContent>
            </Tooltip>

            <DropdownMenu>
              <DropdownMenuTrigger
                as={(triggerProps: DropdownMenuTriggerProps) => (
                  <Tooltip>
                    <TooltipTrigger
                      as={(props: TooltipTriggerProps) => (
                        <Button
                          variant="ghost"
                          class="text-2xl px-0 size-9 text-muted-foreground transition"
                          aria-label="Menu icon"
                          {...props}
                        >
                          <div class="i-tabler-dots-vertical" />
                        </Button>
                      )}
                      {...triggerProps}

                    />

                    <TooltipContent>
                      Plus d'options
                    </TooltipContent>
                  </Tooltip>
                )}
              />

              <DropdownMenuContent class="w-46">

                {/* Mobile only items */}
                <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer md:hidden" target="_blank" href="https://github.com/CorentinTh/pas-fute-fute" rel="noopener noreferrer">
                  <div class="i-tabler-brand-github text-lg" />
                  GitHub
                </DropdownMenuItem>

                <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" href="https://github.com/CorentinTh/pas-fute-fute/issues/new/choose" rel="noopener noreferrer">
                  <div class="i-tabler-bug text-lg" />
                  Signaler un bug
                </DropdownMenuItem>

                <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" href="https://github.com/CorentinTh/pas-fute-fute" rel="noopener noreferrer">
                  <div class="i-tabler-git-branch text-lg" />
                  Contribuer
                </DropdownMenuItem>

                <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer md:hidden" target="_blank" href="https://buymeacoffee.com/cthmsst" rel="noopener noreferrer">
                  <div class="i-tabler-pig-money text-lg" />
                  Soutenir le projet
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <p class="text-lg text-muted-foreground mt-2">
          Le répertoire des expressions françaises pour décrire les moins futé·e·s.
        </p>
      </div>
    </div>
  );
};
