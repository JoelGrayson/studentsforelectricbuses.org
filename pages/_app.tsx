import { AppProps } from 'next/app';
import '../styles/global.css';
import PlausibleProvider from 'next-plausible';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <PlausibleProvider domain='studentsforelectricbuses.org' enabled trackLocalhost>
        <Component {...pageProps} />
    </PlausibleProvider>;
}
