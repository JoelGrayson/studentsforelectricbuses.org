#!/bin/bash

input_file="$1"
output_file="${1%.vtt}.txt"

echo > "$output_file"
while IFS= read -r line; do
    # Ignore first line
    if [[ "$line" =~ ^WEBVTT || "$line" == '' || "$line" == "\n" || "$line" =~ ^[\t\n]*$ ]]; then
        continue
    fi
    
    if [[ ! "$line" =~ ^[0-9]+ ]]; then
        echo -n $line >> "$output_file"
    fi
done < "$input_file"

