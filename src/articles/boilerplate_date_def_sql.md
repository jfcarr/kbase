# Boilerplate Date Definitions for SQL

```sql
DECLARE @today DATETIME = CAST('7/21/2014' AS DATETIME)
 
DECLARE @firstDayCurrMnth DATETIME = 
 Dateadd(dd,CASE
  WHEN DAY(@today) > 1 THEN ( ( DAY(@today) - 1 ) * -1 )
  ELSE 0
 END, @today)
 
DECLARE @firstDayPrevMnth DATETIME = Dateadd(mm, -1, @firstDayCurrMnth)
 
DECLARE @firstDayNextMnth DATETIME = Dateadd(mm, 1, @firstDayCurrMnth)
 
DECLARE @lastDayCurrMnth DATETIME = Dateadd(dd, -1, @firstDayNextMnth)
 
DECLARE @lastDayNextMnth DATETIME = Dateadd(dd, -1, @firstDayNextMnth)
 
DECLARE @lastDayPrevMnth DATETIME = Dateadd(dd, -1, @firstDayCurrMnth)
```
