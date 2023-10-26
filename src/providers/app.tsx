import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom';
import { Error } from '@/components/Template';

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={Error}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ErrorBoundary>
    </React.Suspense>
  )
}