/* Use cases
* <Page>
* <Page noheader>
* <Page nomargin> //everything in top left like default HTML
* <Page center> //aligns to center
*/

import Header from './Header';
import SEO, { SEOProps } from './SEO';

export default function PageContainer(props: {
    noheader?: boolean;
    title?: string;
    children: any;
    bottomPadding?: boolean;
    seo?: SEOProps;

    nomargin?: boolean;
    center?: boolean;
}) {
    return (<>
        {!('noheader' in props) && <Header title={props.title}/> /*include Header unless noheader*/ }
        <SEO seo={props.seo} />
        <main className={`${getMainClassName(props)} ${props.bottomPadding ? 'mb-20' : ''}`}>
            {props.children}
        </main>
    </>);
}

function getMainClassName(props: {
    nomargin?: boolean;
    center?: boolean;
}) {
    const classes=[];
    if (!('nomargin' in props))
        classes.push('max-w-3xl w-[80%] mx-auto mt-9');

    if ('center' in props)
        classes.push('flex flex-col items-center');
    
    return classes.join(' ');
}
