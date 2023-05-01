import { useState } from "react";
import GlobalStyle from "styles/global";
import { ThemeProvider } from "styled-components";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { theme } from "styles/theme";
import { StoreProvider } from "app/store";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <StoreProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </StoreProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
