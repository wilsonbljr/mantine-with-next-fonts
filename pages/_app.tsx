import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

// Change between these to test fonts loaded through google fonts
// and fonts loaded locally
import localFontTheme from "../styles/themes/localFont";
import googleFontTheme from "../styles/themes/googleFont";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={googleFontTheme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
