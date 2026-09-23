# Conditions on aggregates in SQL

You cannot apply a `where` condition to an aggregate in SQL. For example, this does _not_ work:

```sql
SELECT CustID, SUM(OrderAmt)
FROM Orders
GROUP BY CustID
WHERE SUM(OrderAmt) > 100  -- Doesn't work
```

There are a couple of ways to deal with this.

First, there’s the `having` clause, which specifically handles this requirement:

```sql
SELECT CustID, SUM(OrderAmt)
FROM Orders
GROUP BY CustID
HAVING SUM(OrderAmt) > 100
```

If the `having` clause doesn’t work for you, or you’d just prefer not to use it, you can also do some nested selecting and accomplish the same thing:

```sql
SELECT * FROM (
  SELECT CustID, SUM(OrderAmt) AS OrderSum
  FROM Orders
  GROUP BY CustID
) AS OrderGrp
WHERE OrderGrp.OrderSum > 100
```
