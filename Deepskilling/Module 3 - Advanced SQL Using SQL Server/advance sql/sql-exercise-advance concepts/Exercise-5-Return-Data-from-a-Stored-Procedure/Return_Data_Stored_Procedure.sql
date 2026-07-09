-- Exercise 5: Return Data from a Stored Procedure

create database companydb;
use companydb;

create table staff (
    staffid int primary key,
    staffname varchar(50),
    team varchar(30),
    income decimal(10,2)
);

insert into staff values
(201,'Arjun','Sales',48000),
(202,'Meena','Sales',52000),
(203,'Rohan','Development',75000),
(204,'Divya','Development',68000),
(205,'Suresh','Accounts',61000);

delimiter $$

create procedure getstaffbyid(in sid int)
begin
    select * from staff
    where staffid = sid;
end $$

delimiter ;

call getstaffbyid(203);
