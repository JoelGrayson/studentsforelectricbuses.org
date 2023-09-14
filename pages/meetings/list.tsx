export { default } from '.'; //same as index.tsx

// List (modeled after the perspective)
export type meetingT={
    title: string;
    hyphenatedTitle: string;
    date: Date;
    
}

export const list: meetingT[]=[
// ./new.sh inserts new meeting here
    { title: 'Final 2022–23 Meeting', hyphenatedTitle: 'final-meeting-2022-23', date: new Date('May 31, 2023') },
    { title: 'Meeting with the Mobility House', hyphenatedTitle: '5.17.23-meeting-with-the-mobility-house', date: new Date('May 17, 2023') },
    { title: '5.4.23 Club Meeting', hyphenatedTitle: '5.4.23-club-meeting', date: new Date('May 4, 2023') },
    { title: 'Meeting with Superselby 2', hyphenatedTitle: 'meeting-with-superselby-2', date: new Date('Apr 27, 2023') },
    { title: 'Meeting with the Mobility House', hyphenatedTitle: '4.10.23-meeting-with-the-mobility-house', date: new Date('Apr 10, 2023') },
    { title: 'Meeting with Mr. Klingensmith', hyphenatedTitle: 'meeting-with-mr.-klingensmith', date: new Date('April 5, 2023') },
];

