import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { useThemeStore } from '~/stores/theme.store';
import { Button } from './button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './dropdown-menu';

// const ThemeSwitcher: Component = () => {
//   const themeStore = useThemeStore();

//   return (
//     <>
//       <DropdownMenuItem onClick={() => themeStore.setColorMode({ mode: 'light' })} class="flex items-center gap-2 cursor-pointer">
//         <div class="i-tabler-sun text-lg" />
//         Mode clair
//       </DropdownMenuItem>
//       <DropdownMenuItem onClick={() => themeStore.setColorMode({ mode: 'dark' })} class="flex items-center gap-2 cursor-pointer">
//         <div class="i-tabler-moon text-lg" />
//         Mode sombre
//       </DropdownMenuItem>
//       <DropdownMenuItem onClick={() => themeStore.setColorMode({ mode: 'system' })} class="flex items-center gap-2 cursor-pointer">
//         <div class="i-tabler-device-laptop text-lg" />
//         Système
//       </DropdownMenuItem>
//     </>
//   );
// };

// export const Navbar: Component = () => {
//   const themeStore = useThemeStore();

//   return (
//     <div class="border-b border-border bg-surface">
//       <div class="flex items-center justify-between px-6 py-3 mx-auto max-w-840px">
//         <div class="flex items-baseline gap-4">
//           <Button variant="link" class=" items-baseline text-foreground text-lg font-semibold border-b border-transparent hover:(no-underline !border-border) h-auto py-0 px-1 ml--1 rounded-none !transition-border-color-250" as={A} href="/">
//             Pas Fute Fute
//           </Button>

//           <span class="text-muted-foreground hidden sm:block">
//             Le répertoire des citations pour les moins fûtés
//           </span>
//         </div>

//         <div class="flex gap-2 items-center">

//           <Button variant="ghost" class="text-lg px-0 size-9 hidden md:inline-flex" as={A} href="https://github.com/CorentinTh/pas-fute-fute" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
//             <div class="i-tabler-brand-github" />
//           </Button>

//           <DropdownMenu>
//             <DropdownMenuTrigger as={Button} class="text-lg px-0 size-9 hidden md:inline-flex" variant="ghost" aria-label="Change theme">
//               <div classList={{ 'i-tabler-moon': themeStore.getColorMode() === 'dark', 'i-tabler-sun': themeStore.getColorMode() === 'light' }} />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent class="w-42">
//               <ThemeSwitcher />
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <DropdownMenu>

//             <DropdownMenuTrigger as={Button} class="text-lg px-0 size-9" variant="ghost" aria-label="Menu icon">
//               <div class="i-tabler-dots-vertical hidden md:block" />
//               <div class="i-tabler-menu-2 block md:hidden" />
//             </DropdownMenuTrigger>

//             <DropdownMenuContent class="w-46">

//               {/* Mobile only items */}
//               <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer md:hidden" target="_blank" href="https://github.com/CorentinTh/pas-fute-fute" rel="noopener noreferrer">
//                 <div class="i-tabler-brand-github text-lg" />
//                 GitHub
//               </DropdownMenuItem>

//               <DropdownMenuSub>
//                 <DropdownMenuSubTrigger as="a" class="flex items-center gap-2 md:hidden" aria-label="Change theme">
//                   <div class="text-lg" classList={{ 'i-tabler-moon': themeStore.getColorMode() === 'dark', 'i-tabler-sun': themeStore.getColorMode() === 'light' }} />
//                   Theme
//                 </DropdownMenuSubTrigger>

//                 <DropdownMenuSubContent>
//                   <ThemeSwitcher />
//                 </DropdownMenuSubContent>

//               </DropdownMenuSub>

//               <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" href="https://github.com/CorentinTh/pas-fute-fute/issues/new/choose" rel="noopener noreferrer">
//                 <div class="i-tabler-bug text-lg" />
//                 Signaler un bug
//               </DropdownMenuItem>

//               <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" href="https://buymeacoffee.com/cthmsst" rel="noopener noreferrer">
//                 <div class="i-tabler-pig-money text-lg" />
//                 Soutenir le projet
//               </DropdownMenuItem>

//             </DropdownMenuContent>

//           </DropdownMenu>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Header: Component = () => {
  return (
    <div class="mt-2 sm:mt-8 p-6">
      <div class="max-w-800px mx-auto w-full">
        <div class="i-custom-logo size-15 mb-2" />

        <h1 class="font-serif font-700 text-3xl sm:text-4xl  ">
          Pas
          <span class="text-primary">FuteFute</span>
          ...
        </h1>

        <p class="text-lg text-muted-foreground mt-2">
          Le répertoire des expressions françaises pour décrire les moins futé·e·s.
        </p>
      </div>
    </div>
  );
};
