import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "nk-fixed nk-top-0 nk-z-[100] nk-flex nk-max-h-screen nk-w-full nk-flex-col-reverse nk-p-4 sm:nk-bottom-0 sm:nk-right-0 sm:nk-top-auto sm:nk-flex-col md:nk-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "nk-group nk-pointer-events-auto nk-relative nk-flex nk-w-full nk-items-center nk-justify-between nk-space-x-4 nk-overflow-hidden nk-rounded-md nk-border nk-p-6 nk-pr-8 nk-shadow-lg nk-transition-all data-[swipe=cancel]:nk-translate-x-0 data-[swipe=end]:nk-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:nk-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:nk-transition-none data-[state=open]:nk-animate-in data-[state=closed]:nk-animate-out data-[swipe=end]:nk-animate-out data-[state=closed]:nk-fade-out-80 data-[state=closed]:nk-slide-out-to-right-full data-[state=open]:nk-slide-in-from-top-full data-[state=open]:sm:nk-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "nk-border nk-bg-background nk-text-foreground",
        destructive:
          "nk-destructive nk-group nk-border-destructive nk-bg-destructive nk-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "nk-inline-flex nk-h-8 nk-shrink-0 nk-items-center nk-justify-center nk-rounded-md nk-border nk-bg-transparent nk-px-3 nk-text-sm nk-font-medium nk-ring-offset-background nk-transition-colors hover:nk-bg-secondary focus:nk-outline-none focus:nk-ring-2 focus:nk-ring-ring focus:nk-ring-offset-2 disabled:nk-pointer-events-none disabled:nk-opacity-50 group-[.destructive]:nk-border-muted/40 group-[.destructive]:hover:nk-border-destructive/30 group-[.destructive]:hover:nk-bg-destructive group-[.destructive]:hover:nk-text-destructive-foreground group-[.destructive]:focus:nk-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "nk-absolute nk-right-2 nk-top-2 nk-rounded-md nk-p-1 nk-text-foreground/50 nk-opacity-0 nk-transition-opacity hover:nk-text-foreground focus:nk-opacity-100 focus:nk-outline-none focus:nk-ring-2 group-hover:nk-opacity-100 group-[.destructive]:nk-text-red-300 group-[.destructive]:hover:nk-text-red-50 group-[.destructive]:focus:nk-ring-red-400 group-[.destructive]:focus:nk-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="nk-h-4 nk-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("nk-text-sm nk-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("nk-text-sm nk-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
