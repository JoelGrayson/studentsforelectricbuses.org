#!/bin/bash

# Help
#shellcheck disable=SC1078,SC1079
instructions="""Usage: ./new.sh <title> <date>
e.g. ./new.sh 'Meeting with the Mobility House' 'May 17, 2023'"""


if [[ -z "$1" || -z "$2" || "$1" == "help" ]]; then
    echo "$instructions"
    exit 0
fi


# Parameters
title="$1"
hyphenatedTitle=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
date="$2" #e.g., May 23, 2023


# Create file
cat <<EOF > "$hyphenatedTitle.tsx"
import MeetingContainer from '@/components/MeetingContainer';

export default function Meeting() {
    return <MeetingContainer date={'$date'} title={'$title'}>
        <h3>Agenda</h3>
        
        
        <h3>Notes</h3>

        
   </MeetingContainer>;
}
EOF

# Add to list.ts
old_IFS=$IFS
IFS=$'\n'
touch new_list.tmp
while read p; do
    echo "$p" >> new_list.tmp
    [[ "$p" == "// shell files insert new meeting here" ]] && echo "    { title: '$title', hyphenatedTitle: '$hyphenatedTitle', date: new Date('$date') }," >> new_list.tmp
done < "./list.ts"
IFS=$old_IFS
cat new_list.tmp > list.ts
rm new_list.tmp
