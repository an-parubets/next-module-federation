import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
