#!/bin/bash

# Help
#shellcheck disable=SC1078,SC1079
instructions="""Usage: ./convert.sh <file> <title> <date>
e.g. ./convert.sh '3.6.23-meeting-with-superselby-3.docx' 'Meeting with SuperSelby 3' 'Mar 6, 2023'"""


if [[ -z "$1" || -z "$2" || "$1" == "help" ]]; then
    echo "$instructions"
    exit 0
fi


# Parameters
file="$1"
title="$2"
hyphenatedTitle=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
date="$3" #e.g., May 23, 2023


# HTML contents
html_filename="${file%.docx}.html"
pandoc "$file" -o "$html_filename" --extract-media=../../../public/images/meetings/

# Create file
cat <<EOF > "../$hyphenatedTitle.tsx"
import MeetingContainer from '@/components/MeetingContainer';

export default function Meeting() {
    return <MeetingContainer date={'$date'} title={'$title'}>
        $(sed "s;^;\t\t;g" < "$html_filename")
   </MeetingContainer>;
}
EOF

# Add to list.tsx
old_IFS=$IFS
IFS=$'\n'
touch new_list.tmp
while read p; do
    echo "$p" >> new_list.tmp
    [[ "$p" == "// shell files insert new meeting here" ]] && echo "    { title: '$title', hyphenatedTitle: '$hyphenatedTitle', date: new Date('$date') }," >> new_list.tmp
done < ../list.tsx
IFS=$old_IFS
cat new_list.tmp > ../list.tsx
rm new_list.tmp
rm "$html_filename"

