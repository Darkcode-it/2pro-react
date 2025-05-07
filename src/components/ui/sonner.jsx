import { Toaster as Sonner } from 'sonner'

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        },
      }}
    />
  )
}

export const toast = {
  success: (message) => {
    return Sonner.success(message)
  },
  error: (message) => {
    return Sonner.error(message)
  },
  warning: (message) => {
    return Sonner.warning(message)
  },
  info: (message) => {
    return Sonner.info(message)
  },
}
