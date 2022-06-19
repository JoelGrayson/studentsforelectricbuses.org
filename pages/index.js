import Header from '../components/Header.js';
import IdlingEngine from '../components/IdlingEngine';

export default function Home() {
    return (<>
        <Header/>
        <h1 className='text-center'>Students for Electric Buses</h1>
        <IdlingEngine/>
    </>);
}
