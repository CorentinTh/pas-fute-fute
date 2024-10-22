import type { PolymorphicProps } from '@kobalte/core/polymorphic';
import type {
  TooltipContentProps,
  TooltipRootProps,
} from '@kobalte/core/tooltip';
import { Tooltip as TooltipPrimitive } from '@kobalte/core/tooltip';
import { mergeProps, splitProps, type ValidComponent } from 'solid-js';
import { cn } from '~/libs/cn';

export const TooltipTrigger = TooltipPrimitive.Trigger;

export function Tooltip(props: TooltipRootProps) {
  const merge = mergeProps<TooltipRootProps[]>({ gutter: 4 }, props);

  return <TooltipPrimitive {...merge} />;
}

type tooltipContentProps<T extends ValidComponent = 'div'> =
  TooltipContentProps<T> & {
    class?: string;
  };

export function TooltipContent<T extends ValidComponent = 'div'>(props: PolymorphicProps<T, tooltipContentProps<T>>) {
  const [local, rest] = splitProps(props as tooltipContentProps, ['class']);

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        class={cn(
          'z-50 overflow-hidden rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground data-[expanded]:(animate-in fade-in-0 zoom-in-95) data-[closed]:(animate-out fade-out-0 zoom-out-95)',
          local.class,
        )}
        {...rest}
      />
    </TooltipPrimitive.Portal>
  );
}
