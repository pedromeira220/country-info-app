'use client'

import { queryClient } from '@/lib/query-client'
import React, { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'

interface ProvidersProps {
  children: ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
