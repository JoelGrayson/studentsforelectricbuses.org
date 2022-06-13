import Header from '../components/Header';
import Link from 'next/link';

export default function NotFound() {
    return (<>
        <Header title='404 Not Found'/>
        <h1>404 Not Found</h1>
        <Link href="/"><button>Go Home</button></Link>
    </>);
}