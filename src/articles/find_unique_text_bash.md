# Find Unique Instances of Text in Bash

If you need to find unique instances of text within a text file in bash, modify the following to suit:

```bash
cat file_name | grep "text_to_search_for" | sort | uniq
```
