# Check an XML file to see if it is well-formed

This Python script will check a file (or all files in a directory tree) to verify that it/they contain well-formed XML.

```python
import os
import string
import sys
from xml.dom.minidom import parse, parseString
    
def CheckFile(fileName):
    try:
        dom1 = parse(fileName)
    
        if sys.argv[1] != '-rq':
            print fileName + ' is OK'
    
    except Exception as ex:
        print fileName + ': ' + str(ex)
    
def RecursiveCheck():
    for root, subFolders, files in os.walk('.'): 
        for file in files: 
            fullFileName = os.path.join(root,file)
            fileName,fileExt = os.path.splitext(fullFileName)
            if fileExt == '.xml' or fileExt == '.config' or fileExt == '.build':
                CheckFile(fullFileName)
    
def UsageMessage():
    print '\nUsage:\n'
    print '\tSingle file:'
    print '\t\tconfigchecker.py <inputfile.xml>'
    print '\n'
    print '\tRecursive, verbose:'
    print '\t\tconfigchecker.py -r'
    print '\n'
    print '\tRecursive, reporting only errors:'
    print '\t\tconfigchecker.py -rq'
    
    
### MAIN starts here ###
    
if len(sys.argv) != 2:
    UsageMessage()
    sys.exit(1)
    
print '\n'
    
if sys.argv[1] == '-r' or sys.argv[1] == '-rq':
    RecursiveCheck()
else:
    CheckFile(sys.argv[1])
```
