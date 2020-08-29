show databases;
create database if not exists bookStore;
use bookStore;

show tables;

drop table if exists books;
drop table if exists books_authors;
drop table if exists authors;

create table books(isbn int, title varchar(50), price float, qty int);
create table books_authors(authorID int, isbn int);
create table authors(authorID int, name varchar(30), email varchar(30));

insert into books values (1001, 'Java for Dumblings', 11.11, 11);
insert into books values (1002, 'Java zwei', 22.22, 22);
insert into books values (1003, 'Java drei', 33.33, 33);
insert into books values (1004, 'Java vier', 44.44, 44);

insert into books_authors values (1, 1001);
insert into books_authors values (2, 1001);
insert into books_authors values (3, 1001);
insert into books_authors values (1, 1002);
insert into books_authors values (3, 1002);
insert into books_authors values (2, 1003);
insert into books_authors values (2, 1004);

insert into authors values (1, 'Yaminari', 'yami@bla.com');
insert into authors values (2, 'Kaminari', 'kami@bla.com');
insert into authors values (3, 'Faminari', 'fami@bla.com');
insert into authors values (4, 'Naminari', 'nami@bla.com');

SELECT books.title, books.price, authors.name
   FROM books, books_authors, authors
   WHERE books.isbn = books_authors.isbn
      AND authors.authorID = books_authors.authorID;

SELECT books.title, books.price, authors.name
   FROM books, books_authors, authors
   WHERE books.isbn = books_authors.isbn
      AND authors.authorID = books_authors.authorID
      AND authors.name = 'Tan Ah Teck';