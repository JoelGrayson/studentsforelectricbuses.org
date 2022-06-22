import Page from '../components/PageContainer';
import Link from 'next/link';

export default function NotFound() {
    return (<Page title='404 Not Found'>
        <h1>404 Not Found</h1>
        <Link href="/"><button>Go Home</button></Link>
    </Page>);
}