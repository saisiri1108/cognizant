-- Exercise 5: Return Data from a Stored Procedure

create database officedb;
use officedb;

create table workers (
    workerid int primary key,
    workername varchar(50),
    division varchar(30),
    salary decimal(10,2)
);

insert into workers values
(301,'Akhil','Marketing',55000),
(302,'Neha','Marketing',58000),
(303,'Karthik','Development',76000),
(304,'Priya','Development',69000),
(305,'Manoj','Accounts',62000);

delimiter $$

create procedure getworkerbyid(in wid int)
begin
    select *
    from workers
    where workerid = wid;
end $$

delimiter ;

call getworkerbyid(303);
