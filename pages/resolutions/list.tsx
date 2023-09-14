export { default } from '.'; //same as index.tsx

// List (modeled after the perspective)
export enum ResolutionStatus {
    Idea='Idea',
    Draft='Draft',
    Passed='Passed',
    Complete='Complete'
};

export type resolutionT={
    title: string;
    hyphenatedTitle: string;
    date: Date;
    status: ResolutionStatus;
};

export const list: resolutionT[]=[
// shell files insert new resolution here
    { title: 'Contacting Manufacturers', hyphenatedTitle: 'contacting-manufacturers', date: new Date('Dec 17, 2021'), status: ResolutionStatus.Complete },
].sort((a, b)=>b.date.getTime()-a.date.getTime());;

