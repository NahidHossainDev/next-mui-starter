import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "createEmotionCache";
import type { AppProps } from "next/app";
export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={{}}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}
