/* Use cases
* <Page>
* <Page noheader>
* <Page nomargin> //everything in top left like default HTML
* <Page center> //aligns to center

*/

import Header from './Header';

export default function PageContainer(props) {
    return (<>
        {!('noheader' in props) && <Header title={props.title}/> /*include Header unless noheader*/ }
        <main className={getMainClassName(props)}>
            {props.children}
        </main>
    </>);
}

function getMainClassName(props) {
    let classes=[];
    if (!('nomargin' in props))
        classes.push('max-w-3xl w-[80%] mx-auto mt-9');

    if ('center' in props)
        classes.push('flex flex-col items-center');
    
    return classes.join(' ');
}
