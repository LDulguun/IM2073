show databases;
create database if not exists ABCTrading;
use ABCTrading;

show tables;
drop table if exists products;
create table products(id int, category char(3), name varchar(20), quantity int, price float);
describe products;

insert into products values (1001, 'PEN', 'Pen Red', 5000, 1.23);
insert into products values (1002, 'PEN', 'Pen Blue', 8000, 1.25);
insert into products values (1003, 'PEN', 'Pen Black', 2000, 1.25);
insert into products values (1004, 'PCL', 'Pencil 2B', 10000, 0.49);
insert into products values (1005, 'PCL', 'Pencil 2H', 9000, 0.48);

select * from products where name like '%Pencil%';

select * from products where price >= 1.0;

update products set price = price * 1.1;
select * from products;

delete from products where name ='Pen Red';
select * from products;