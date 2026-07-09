-- Exercise 7: Return Data from a Scalar Function

create database companydb;
use companydb;

create table staff (
    staffid int primary key,
    staffname varchar(50),
    income decimal(10,2)
);

insert into staff values
(201, 'Arjun', 48000),
(202, 'Meena', 52000),
(203, 'Rohan', 75000),
(204, 'Divya', 68000),
(205, 'Suresh', 61000);

delimiter $$

create function getincome(sid int)
returns decimal(10,2)
deterministic
begin
    declare inc decimal(10,2);

    select income
    into inc
    from staff
    where staffid = sid;

    return inc;
end $$

delimiter ;

select getincome(203) as staff_income;
