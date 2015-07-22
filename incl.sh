#!/bin/bash

function help()
{
	echo "incl - Finds all include directives and replaces them with file contents"
	echo "usage: incl SKELETON DEST"
}

#-z checks if string is null or not, if its null then statement is true
if [ -z "$1" ]
then	
	help
	exit
fi

if [ -z "$2" ]
then	
	help
	exit
fi

file_names=$(sed -n 's/include "\(.*\)"/\1/p' $1)

IFS=' ' read -a array <<< $file_names

output=$(cat $1)

for element in "${array[@]}"
do
	#esapce include contents
    content=$(sed s/'"'/'\"'/g $element)
	content=$(echo -e "$content" | sed s/'[\/&]'/'\\&'/g)

	output=$(echo -e "$output" | sed s/'include "'$element'"'/"`echo $content`"/)
done

echo -e "$output \n" > $2


# file=$(sed s/'"'/'\"'/g $file_names)
# echo $file



# file=$(echo $file | sed s/'[\/&]'/'\\&'/g)
# echo $file

# file=$(sed s/'include ".*"'/"`echo $file`"/ skeleton.html)
# echo "$file"


# # file=$(echo $file | sed s/"'"/"\'"/g)
# # echo $file