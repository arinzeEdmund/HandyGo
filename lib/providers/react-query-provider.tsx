import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { useEffect } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "online",
      retry: 3,
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
    mutations: {
      networkMode: "online",
      retry: false,
    },
  },
});

export async function setupQueryCache() {
  const persister = createAsyncStoragePersister({
    storage: AsyncStorage,
    key: "digitpay-app-cache",
  });

  await persistQueryClient({
    queryClient,
    persister,
    maxAge: 1000 * 60 * 60 * 10, // 10 hours
  });
}

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    setupQueryCache();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
