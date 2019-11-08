create schema if not exists apiflask;
use apiflask;
create table if not exists supermercados(
	id_super int primary key not null auto_increment,
    nom_super varchar(50),
    dir_super varchar(50)
);
create table if not exists cliente(
	id_cli int primary key not null auto_increment,
    nom_cli varchar(50),
    ape_cli varchar(50),
    cat_cli varchar(50)
);
create table if not exists super_cli(
	id_super_cli int primary key not null auto_increment,
    id_cli int,
    id_super int,
    foreign key (id_cli) references cliente(id_cli),
    foreign key (id_super) references supermercados(id_super)
);