import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { classes } from '@/utils/classes'

const buttonVariants = cva(
  'cursor-pointer inline-flex gap-2 items-center tansition duration-100 text-nowrap font-medium',
  {
    variants: {
      variant: {
        primary: `transition ease-in-out text-[hsl(var(--p-color-bg-high))] bg-[hsl(var(--p-color-text-high))] active:translate-y-[1px] rounded-md sm:rounded hover:ring-1 ring-offset-[hsl(var(--p-color-bg))] hover:ring-color-accent-low hover:ring-offset-2`,
        secondary:
          'text-color-base hover:text-color-accent-high bg-color-low hover:bg-color-lower active:translate-y-[1px] rounded-md sm:rounded',
        ghost:
          'text-color-base hover:text-color-accent-high hover:bg-color-low/60 active:translate-y-[1px] rounded-md sm:rounded',
        link: 'text-color-base hover:text-color-accent-high',
        navitem: 'rounded-lg',
      },
      size: {
        default: 'py-1.5 px-4 sm:px-2 min-w-11 min-h-11 sm:min-w-8 sm:min-h-8 text-sm',
        compact: 'py-1 px-0.5 text-sm',
        lg: 'font-semibold text-sm h-10 rounded-md px-4 tracking-[-0.015em]',
        icon: 'justify-center h-8 w-8',
      },
      active: {
        true: 'text-color-accent-base',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'navitem',
        active: true,
        class: 'bg-color-low text-color-accent-high',
      },
      {
        variant: 'navitem',
        active: false,
        class: 'text-color-base hover:text-color-accent-high hover:bg-color-low/60',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      active: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, active, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={classes(buttonVariants({ variant, size, className, active }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
