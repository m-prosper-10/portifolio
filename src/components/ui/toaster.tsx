"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0)
    return () => clearTimeout(timer)
  }, [])

  return isClient
}

export function Toaster() {
  const { toasts } = useToast()
  const isClient = useIsClient()

  if (!isClient) return null

  const toasterContent = (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )

  return createPortal(toasterContent, document.body)
}
