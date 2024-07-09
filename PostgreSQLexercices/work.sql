insert into users values(1,'matei','matei@yahoo.com');
insert into users values(2,'catalin','catalin8@gmail.com');
insert into users values(3,'andreea','anda.andreeea@yahoo.com');

insert into orders values(1,1,'computer','2022/10/12');
insert into orders values(2,3,'intel i9 processor','2024/8/30')
create table orders(
	id int primary key,
	user_id int,
	product_name varchar(40),
	order_date date,
	foreign key (user_id) references users(id)
)

select users.name, product_name, order_date from users 
	inner join orders 
	on users.id=orders.user_id