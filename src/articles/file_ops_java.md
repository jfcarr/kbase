# File Operations in Java

## Delete a File

Copied from [here](http://www.java2s.com/Code/Java/File-Input-Output/DeletefileusingJavaIOAPI.htm).

```java
import java.io.File;
 
public class Delete {
  public static void main(String[] args) {
    String fileName = "file.txt";
    // A File object to represent the filename
    File f = new File(fileName);
 
    // Make sure the file or directory exists and isn't write protected
    if (!f.exists())
      throw new IllegalArgumentException(
          "Delete: no such file or directory: " + fileName);
 
    if (!f.canWrite())
      throw new IllegalArgumentException("Delete: write protected: "
          + fileName);
 
    // If it is a directory, make sure it is empty
    if (f.isDirectory()) {
      String[] files = f.list();
      if (files.length > 0)
        throw new IllegalArgumentException(
            "Delete: directory not empty: " + fileName);
    }
 
    // Attempt to delete it
    boolean success = f.delete();
 
    if (!success)
      throw new IllegalArgumentException("Delete: deletion failed");
  }
}
```

## Rename a File

Copied from [here](http://exampledepot.8waytrips.com/egs/java.io/RenameFile.html).

```java
// File (or directory) with old name
File file = new File("oldname");
 
// File (or directory) with new name
File file2 = new File("newname");
if(file2.exists()) throw new java.io.IOException("file exists");
 
// Rename file (or directory)
boolean success = file.renameTo(file2);
if (!success) {
    // File was not successfully renamed
}
```
