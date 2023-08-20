export { default } from '.'; //same as index.tsx

// List (modeled after the perspective)
export type meetingT={
    title: string;
    hyphenatedTitle: string;
    date: Date;
    
}

export const list: meetingT[]=[
    { title: 'Final 2022–23 Meeting', hyphenatedTitle: 'final-meeting-2022-23', date: new Date('May 31, 2023') },
    { title: 'Meeting with Superselby 2', hyphenatedTitle: 'meeting-with-superselby-2', date: new Date('Apr 27, 2023') },
];

