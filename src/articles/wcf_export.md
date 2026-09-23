# WCF Export

Given the URL of a [WCF](../glossary.md#windows-communication-foundation-wcf) service (along with a output prefix and target namespace), this Python script generates C# proxy source and config files. These files can then be imported/copied to a .NET project and used directly to consume the web service.

```python
import os
import string
import subprocess
import sys

class WCFExporter:
	def __init__(self, serviceURL, outputPrefix, targetNamespace):
		self.serviceURL = serviceURL
		self.outputPrefix = outputPrefix
		self.targetNamespace = targetNamespace

		self.svcUtilCmd = 'C:\\PROGRA~1\\MI2578~1\\Windows\\v6.0A\\Bin\\SvcUtil.exe'

	def DropGeneratedCodeAttribute(self):
		try:
			mySourceFile = self.outputPrefix + '.temp.cs'
			myTargetFile = self.outputPrefix + '.cs'

			mySourceHandle = open(mySourceFile, 'r')
			myTargetHandle = open(myTargetFile, 'w')

			for inputLine in mySourceHandle:
				if 'GeneratedCodeAttribute' not in inputLine:
					myTargetHandle.write(inputLine)

			myTargetHandle.close()
			mySourceHandle.close()

			os.remove(mySourceFile)

		except Exception as ex:
			print '[ERROR] ' + str(ex)

	def GenerateFiles(self):
		try:
			retcode = -1

			myCommandString = self.svcUtilCmd + ' /t:code ' + self.serviceURL + ' /out:' + self.outputPrefix + '.temp.cs /config:' + self.outputPrefix + '.config /namespace:*,' + self.targetNamespace

			retcode = subprocess.call(myCommandString)
		
		except Exception as ex:
			print '[ERROR] ' + str(ex)

		return retcode
	
	def UsageMessage(self):
		print '\nUSAGE: wcfexport.py <wcf service url> <output prefix> <target namespace>'
		print '\n\n\tEXAMPLE: wcfexport.py http://CoolService:9030 MyNewProxy MyCompany.MyPkg'
		print '\n\n\tOUTPUT: MyNewProxy.cs and MyNewProxy.config'

### MAIN starts here ###

myWCFExporter = WCFExporter('','','')

if len(sys.argv) != 4:
	myWCFExporter.UsageMessage()
	sys.exit(1)

myWCFExporter.serviceURL = sys.argv[1]
myWCFExporter.outputPrefix = sys.argv[2]
myWCFExporter.targetNamespace = sys.argv[3]

print '\n'

retcode = myWCFExporter.GenerateFiles()

if retcode == 0:
	myWCFExporter.DropGeneratedCodeAttribute()
```
