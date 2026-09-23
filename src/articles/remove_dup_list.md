# Remove Duplicates From List Collection

A couple of examples of removing duplicate entries in list collections in C#.

## Implemented As a Method

```csharp
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
    
namespace Console1
{
    class Program
    {
    
        static IEnumerable<T> RemoveDuplicates<T>(List<T> inputList)
        {
            inputList.Sort();
    
            return inputList.Distinct();
        }
    
        static void Main(string[] args)
        {
            var myList = new List<string> {
                "John",
                "Andrew",
                "James",
                "Jack",
                "Andrew",
                "Bob",
                "Jack"
            };
    
            var newList = RemoveDuplicates(myList);
    
            foreach (var item in newList)
            {
                Console.WriteLine(item);
            }
        }
    }
}
```

## Implemented As An Extension

```csharp
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
    
namespace Console1
{
    public static class ListExtension
    {
        public static IEnumerable<T> RemoveDuplicates<T>(this List<T> inputList)
        {
            inputList.Sort();
    
            return inputList.Distinct();
        }
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            var myList = new List<string> {
                "John",
                "Andrew",
                "James",
                "Jack",
                "Andrew",
                "Bob",
                "Jack"
            };
    
            var newList = myList.RemoveDuplicates();
    
            foreach (var item in newList)
            {
                Console.WriteLine(item);
            }
        }
    }
}
```
