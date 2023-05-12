import { Reset } from "styled-reset";
import * as React from "react";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <React.Fragment>
          <Reset />
          <Component {...pageProps} />
        </React.Fragment>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
