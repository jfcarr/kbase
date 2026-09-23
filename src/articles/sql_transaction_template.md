# SQL Transaction Template

```sql
BEGIN TRY
   BEGIN TRANSACTION

   -- Do stuff

   COMMIT
END TRY
BEGIN CATCH
   PRINT '[ERROR] ' + ERROR_MESSAGE();
   PRINT '[SEVERITY] ' + CAST(ERROR_SEVERITY() AS VARCHAR);
   PRINT '[STATE] ' + CAST(ERROR_STATE() AS VARCHAR);

   ROLLBACK
END CATCH

```

## Safe Way to Test

```sql
BEGIN TRY
   BEGIN TRANSACTION

   -- 1. SELECT statement to check the "pre" state.

   -- 2. UPDATE to make the change.

   -- 3. SELECT statement to check the "post" state.

   ROLLBACK -- Change back to a COMMIT when you're ready for production.
END TRY
BEGIN CATCH
   PRINT '[ERROR] ' + ERROR_MESSAGE();
   PRINT '[SEVERITY] ' + CAST(ERROR_SEVERITY() AS VARCHAR);
   PRINT '[STATE] ' + CAST(ERROR_STATE() AS VARCHAR);

   ROLLBACK
END CATCH

```
