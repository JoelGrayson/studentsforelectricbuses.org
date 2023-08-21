export { default } from '.'; //same as index.tsx

// List (modeled after the perspective)
export enum ResolutionStatus {
    Idea='Idea',
    Draft='Draft',
    Passed='Passed'
};
export type resolutionT={
    title: string;
    hyphenatedTitle: string;
    date: Date;
    status: ResolutionStatus;
}

export const list: resolutionT[]=[
    // { title: 'Final 2022–23 Meeting', hyphenatedTitle: 'final-meeting-2022-23', date: new Date('May 31, 2023') },
];

