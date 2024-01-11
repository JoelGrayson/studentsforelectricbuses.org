import Page from '../components/PageContainer';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

export default function MarkdownPage({ filename }: { filename: string /* string ending in .md */ }) {
    if (!filename.endsWith('.md'))
        filename+='.md';

    const [markdown, setMarkdown]=useState('');

    useEffect(() => {
        fetch(`/markdown/${filename}`) //from public folder
            .then((res)=>res.text())
            .then((text)=>setMarkdown(text))
            .catch((err)=>console.error(err));
    }, [filename]);

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

