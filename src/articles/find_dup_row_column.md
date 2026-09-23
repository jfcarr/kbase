# Find Duplicate Rows By Specific Columns

Consider a table, MyTable, with four columns: KeyCol, NameCol, IsActive, RowVersion. If you wanted to find all rows where NameCol and IsActive have the same values, you could do it as follows:

```sql
SELECT * FROM
 (SELECT NameCol, IsActive, COUNT(*) AS DupCount
 FROM MyTable
 GROUP BY NameCol,IsActive) AS ResultSet
WHERE ResultSet.DupCount > 1
```
