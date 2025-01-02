import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-[#D7BBAA] via-[#A47C65] to-[#6C4F3D] text-white hover:from-[#D7BBAA]/90 hover:via-[#A47C65]/90 hover:to-[#6C4F3D]/90', // Light coffee, rich brown, dark mocha gradient
        destructive:
          'bg-gradient-to-r from-[#D7BBAA] via-[#A47C65] to-[#6C4F3D] text-white hover:from-[#D7BBAA]/90 hover:via-[#A47C65]/90 hover:to-[#6C4F3D]/90', // Gradient for destructive button as well
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-gradient-to-r from-[#D7BBAA] via-[#A47C65] to-[#6C4F3D] text-white hover:from-[#D7BBAA]/90 hover:via-[#A47C65]/90 hover:to-[#6C4F3D]/90', // Secondary button uses the same gradient
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-[#D7BBAA] underline-offset-4 hover:underline', // Link color as light coffee tone
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
