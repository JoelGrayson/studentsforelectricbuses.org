export { default } from '.'; //same as index.tsx

// List (modeled after the perspective)
export type meetingT={
    title: string;
    hyphenatedTitle: string;
    date: Date;
    
}

export const list: meetingT[]=[
// shell files insert new meeting here
    { title: '1.12.22 Meeting with Administration', hyphenatedTitle: '1.12.22-meeting-with-administration.tsx', date: new Date('Jan 12, 2022') },
    { title: 'Meeting with Riverdale Administration', hyphenatedTitle: 'meeting-with-riverdale-administration', date: new Date('Jan 12, 2022') },
    { title: 'Meeting with Fieldston Teachers', hyphenatedTitle: 'meeting-with-fieldston-teachers', date: new Date('Jan 17, 2022') },
    { title: 'Meeting with Fieldston', hyphenatedTitle: 'meeting-with-fieldston', date: new Date('Apr 14, 2022') },
    { title: 'Final 2022–23 Meeting', hyphenatedTitle: 'final-meeting-2022-23', date: new Date('May 31, 2023') },
    { title: 'Meeting with the Mobility House', hyphenatedTitle: '5.17.23-meeting-with-the-mobility-house', date: new Date('May 17, 2023') },
    { title: '5.4.23 Club Meeting', hyphenatedTitle: '5.4.23-club-meeting', date: new Date('May 4, 2023') },
    { title: 'Meeting with Superselby 3', hyphenatedTitle: 'meeting-with-superselby-3', date: new Date('Apr 27, 2023') },
    { title: 'Meeting with the Mobility House', hyphenatedTitle: '4.10.23-meeting-with-the-mobility-house', date: new Date('Apr 10, 2023') },
    { title: 'Meeting with Mr. Klingensmith', hyphenatedTitle: 'meeting-with-mr.-klingensmith', date: new Date('April 5, 2023') },
    { title: 'Meeting with SuperSelby 2', hyphenatedTitle: 'meeting-with-superselby-2', date: new Date('Mar 6, 2023') },
    { title: 'First 2022–23 Meeting', hyphenatedTitle: 'first-meeting-2022-23', date: new Date('Sep 28, 2022') },
].sort((a, b)=>b.date.getTime()-a.date.getTime());

