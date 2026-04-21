'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { queryClient } from '@/shared/api/queryClient';

async function enableMocking() {
  if (process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled') return;
  const { worker } = await import('@/shared/mocks/browser');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    enableMocking()
      .catch(() => {
        // MSW가 실패해도 앱은 동작해야 함
      })
      .finally(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
