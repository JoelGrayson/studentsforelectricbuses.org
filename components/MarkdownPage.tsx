import Page from '../components/PageContainer';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

export default function MarkdownPage({ filename }: { filename: string /* string ending in .md */ }) {
    if (!filename.endsWith('.md'))
        filename+='.md';

    const [markdown, setMarkdown]=useState('');

    useEffect(() => {
        // Fetch your markdown content here and set it using setMarkdown
        // For example, from a local file:
        fetch(`/markdown/${filename}`) //from public
            .then((res)=>res.text())
            .then((text)=>setMarkdown(text))
            .catch((err)=>console.error(err));
    }, [filename]); // Empty dependency array to run only once on mount


    return <Page>
        <Markdown options={{
            // wrapper: 'div'
            overrides: {
                h1: {
                  component: 'h1',
                  props: {
                    className: 'text-center',
                  },
                },    
            }    
        }}>
            {markdown}
        </Markdown>
    </Page>;
}

