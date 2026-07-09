-- Exercise 1: Ranking and Window Functions

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

-- ROW_NUMBER()

select staffid,
       staffname,
       team,
       income,
       row_number() over(order by income desc) as row_num
from staff;

-- RANK()

select staffid,
       staffname,
       team,
       income,
       rank() over(order by income desc) as rank_num
from staff;

-- DENSE_RANK()

select staffid,
       staffname,
       team,
       income,
       dense_rank() over(order by income desc) as dense_rank_num
from staff;

-- ROW_NUMBER() with PARTITION BY

select staffid,
       staffname,
       team,
       income,
       row_number() over(partition by team order by income desc) as team_row
from staff;

-- RANK() with PARTITION BY

select staffid,
       staffname,
       team,
       income,
       rank() over(partition by team order by income desc) as team_rank
from staff;

-- LEAD()

select staffid,
       staffname,
       income,
       lead(income) over(order by income) as next_income
from staff;

-- LAG()

select staffid,
       staffname,
       income,
       lag(income) over(order by income) as previous_income
from staff;

-- FIRST_VALUE()

select staffid,
       staffname,
       income,
       first_value(income) over(order by income desc) as highest_income
from staff;

-- LAST_VALUE()

select staffid,
       staffname,
       income,
       last_value(income) over(
           order by income
           rows between unbounded preceding
           and unbounded following
       ) as lowest_income
from staff;
