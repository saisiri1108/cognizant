-- Exercise 2: Index

create database companydb;
use companydb;

create table staff (
    staffid int primary key,
    staffname varchar(50),
    team varchar(30),
    income decimal(10,2)
);

insert into staff values
(201, 'Arjun', 'Sales', 48000),
(202, 'Meena', 'Sales', 52000),
(203, 'Rohan', 'Development', 75000),
(204, 'Divya', 'Development', 68000),
(205, 'Suresh', 'Accounts', 61000),
(206, 'Kavya', 'Accounts', 61000),
(207, 'Nikhil', 'Development', 85000);

create index idx_staffname
on staff(staffname);

select * from staff;

show indexes from staff;

drop index idx_staffname on staff;
