/*
   2019年9月26日21:21:58
   用户: 
   服务器: IWGK8KJDW61OVD2
   数据库: swgl
   应用程序: 
*/

/* 为了防止任何可能出现的数据丢失问题，您应该先仔细检查此脚本，然后再在数据库设计器的上下文之外运行此脚本。*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
CREATE TABLE dbo.handlerdeduct
	(
	id int NULL,
	handler varchar(50) NULL,
	sale float(53) NULL,
	deduct float(53) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.handlerdeduct SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
select Has_Perms_By_Name(N'dbo.handlerdeduct', 'Object', 'ALTER') as ALT_Per, Has_Perms_By_Name(N'dbo.handlerdeduct', 'Object', 'VIEW DEFINITION') as View_def_Per, Has_Perms_By_Name(N'dbo.handlerdeduct', 'Object', 'CONTROL') as Contr_Per 