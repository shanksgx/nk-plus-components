import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "nk-inline-flex nk-items-center nk-justify-center nk-whitespace-nowrap nk-rounded-md nk-text-sm nk-font-medium nk-ring-offset-background nk-transition-colors focus-visible:nk-outline-none focus-visible:nk-ring-2 focus-visible:nk-ring-ring focus-visible:nk-ring-offset-2 disabled:nk-pointer-events-none disabled:nk-opacity-50",
  {
    variants: {
      variant: {
        default: "nk-bg-primary nk-text-primary-foreground hover:nk-bg-primary/90",
        destructive:
          "nk-bg-destructive nk-text-destructive-foreground hover:nk-bg-destructive/90",
        outline:
          "nk-border nk-border-input nk-bg-background hover:nk-bg-accent hover:nk-text-accent-foreground",
        secondary:
          "nk-bg-secondary nk-text-secondary-foreground hover:nk-bg-secondary/80",
        ghost: "hover:nk-bg-accent hover:nk-text-accent-foreground",
        link: "nk-text-primary nk-underline-offset-4 hover:nk-underline",
      },
      size: {
        default: "nk-h-10 nk-px-4 nk-py-2",
        sm: "nk-h-9 nk-rounded-md nk-px-3",
        lg: "nk-h-11 nk-rounded-md nk-px-8",
        icon: "nk-h-10 nk-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
