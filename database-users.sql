drop database if exists users;
create database users char set utf8;
use users;
select database();

create table users (
	id int not null primary key auto_increment,
    name varchar(30) not null,
    login varchar(30) not null,
    email varchar(30) not null,
    password varchar(30) not null,
    created_at date not null,
    update_at date not null,
    admin boolean not null
);

create table refreshToken (
	id int not null primary key auto_increment,
    user_id int not null,
    refreshToken varchar(100) not null
);
alter table refreshToken add foreign key (user_id) references users(id);

create table entitlements (
	id int not null primary key auto_increment,
    can_view_users boolean not null default 0,
	can_edit_users boolean not null default 0,
	can_delete_users boolean not null default 0,
	can_view_details boolean not null default 0,
	can_view_details_full boolean not null default 0,
	can_edit_users_full boolean not null default 0,
    user_id int not null
);
alter table entitlements add foreign key (user_id) references users(id);

insert into users  (name, login, email, password, created_at, update_at, admin) values 
    ("Misha", "admin", "misha@mail.ru", 12345, "2020-01-02", "2020-01-02", true),
    ("Sasha", "agent", "sasha@mail.ru", 54321, "2020-01-02", "2020-01-02", false);
    
insert into entitlements (can_view_users, can_edit_users, can_delete_users, can_view_details, can_view_details_full, can_edit_users_full, user_id) values 
    (true, true, true, true, true, true, 1),
    (true, true, false, true, false, false, 2);

select * from users;
    
