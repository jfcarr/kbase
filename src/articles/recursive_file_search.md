# Recursive File Search

## grep

```bash
grep -r --include="*.*" searchtext .
```

For example, to search all C# source files for instances of the the text “TODO”:

```bash
grep -r --include="*.cs" TODO .
```

Here's an example that's a little more readable:

```bash
grep -rin --include '*.json' -e 'globalmetadata' .
```

You can specify multiple extensions in –include like this:

```bash
grep -rin --include=\*.{json,cs} -e 'globalmetadata' .
```

## C#

```csharp
using System.IO;

string[] fileList =
Directory.GetFiles(Directory.GetCurrentDirectory(), "*.xml", SearchOption.AllDirectories);
```

Change the *.xml mask to whatever search pattern you want. The fileList array will contain a list of all matching files, with fully-qualified paths.

## Ruby

Here’s how to implement a grep-like utility in Ruby which will recursively search subdirectories:

```ruby
if (ARGV[0] == nil && ARGV[1] == nil)
 puts ("Usage: rbfilesearch.rb ")
else
 myFile = ARGV[0]
 myText = ARGV[1]
 Dir['**/*' + myFile + '*'].each do |path|
  File.open( path ) do |f|
   f.grep( /#{myText}/ ) do |line|
    puts(path + " : " + line)
   end
  end
 end
end
```
