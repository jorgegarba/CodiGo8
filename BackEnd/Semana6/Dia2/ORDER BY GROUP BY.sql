# crear una base de datos de una playa de estacionamiento, en el cual
# se guarden los vehiculos que ingresaron y tener un registro de vehiculos, una 
# tabla vehiculos debe tener su id, placa, marca, año, modelo, color, tambien la
# playa de estacionamiento tiene 3 lugares, uno en la calle san francisco 204, otro en
# san juan de dios 132 y otro en la av eeuu 505 por lo que se debe tener una tabla
# playa con su id, direccion, cantidad. La base de datos se debe llamar Playa_AQP
create database if not exists Playa_AQP;
use Playa_AQP;
create table if not exists Vehiculos(
	id_vehiculo int primary key not null auto_increment,
    placa varchar(7),
    marca varchar(20),
    anio varchar(4),
    modelo varchar(30),
    color varchar(20)
);
create table if not exists Playa(
	id_playa int primary key not null auto_increment,
    direccion varchar(100),
    cantidad int
);
create table if not exists Registro(
	id int primary key not null auto_increment,
    id_vehiculo int,
    id_playa int,
    foreign key (id_vehiculo) references vehiculos(id_vehiculo),
    foreign key (id_playa) references playa(id_playa)
);
# tenemos que agregar un campo que sea fecha_ingreso y fecha_salida que sean de tipo datetime
alter table Registro add column fecha_ingreso datetime;
alter table Registro add column fecha_salida datetime;

select * from registro;
-- ingresar 5 vehiculos diferentes y las 3 playas 
insert into vehiculos (placa,marca,modelo,color,anio) values 
('V3A527','VOLKSWAGEN','TIGUAN','BLANCO','2018'),
('ABC345','FORD','FIESTA','AMARILLO','2015'),
('T4F567','RENAULT','KOLEOS','NEGRO','2018'),
('AVF465','DAEWOO','TICO','AZUL','2016'),
('GNB867','HIUNDAY','SANTA FE','NEGRO','2018');

INSERT INTO PLAYA (DIRECCION,CANTIDAD) VALUES 
('CALLE SAN FRANCISCO 204',30),
('SAN JUAN DE DIOS 132',25),
('AV EEUU 505',10);

INSERT INTO REGISTRO (ID_VEHICULO,ID_PLAYA,FECHA_INGRESO,FECHA_SALIDA) VALUES 
(1,1,'2019-11-05 10:20','2019-11-05 11:33'),
(1,2,'2019-11-02 17:20','2019-11-02 19:33'),
(2,1,'2019-11-04 10:20','2019-11-04 11:33'),
(3,1,'2019-11-04 10:20','2019-11-04 11:33'),
(3,3,'2019-11-05 10:05','2019-11-05 11:33'),
(4,3,'2019-11-01 10:25','2019-11-01 11:33'),
(4,3,'2019-11-01 19:34','2019-11-01 20:45'),
(5,1,'2019-10-05 10:20','2019-10-05 11:33'),
(5,2,'2019-10-05 10:20','2019-10-05 11:33'),
(1,1,'2019-10-05 10:20','2019-10-05 11:33');
# SE DESEA SABER LA CANTIDAD DE VECES QUE UN VEHICULO A INGRESADO A CUALQUIERA DE LAS TRES PLAYAS
# PISTA: USE COUNT()
SELECT placa,count(vehiculos.id_vehiculo) as "Veces en Total" from registro inner join vehiculos
on registro.id_vehiculo = vehiculos.id_vehiculo
# la clausula GROUP BY se usa para agrupar los resultados de una funcion y que respete sus 
# parametros
# agrupame todos los conteos (en esta sentencia) de las veces que hay coincidencia con el 
# id de vehiculo por medio de su placa
GROUP BY placa
# EL ORDER BY siempre va al final y sirve para order el resultado de la sentencia ya sea ASC (ascendente)
# o DESC (descendente)
ORDER BY 2 DESC;

# El cliente desea saber la cantidad de vehiculos por mes
# SELECT campos
# FROM tablas [INNER JOIN][LEFT JOIN]...
# WHERE condicion
# GROUP BY agrupamiento
# ORDER BY columna [ASC]|[DESC]
# YEAR() MONTH()
select month(fecha_ingreso) as Mes, count(month(fecha_ingreso)) as Conteo
from registro
where year(fecha_ingreso)=2019
group by month(fecha_ingreso);

# Se tiene una base de datos de un colegio con las tablas
# aulas(aula_id, aula_nro, aula_piso, aula_capacidad), pabellon (pb_id, pb_desc),
# reserva(res_id, res_fechin, res_fechfin, res_est, res_obs), 
# tipo_aula(taula_id, taula_desc) y usuario(usu_id, usu_nom, usu_ape, usu_email, 
# usu_pass) 
# se sabe que un pabellon puede tener muchas aulas y que una aula solo pertenece a un
# pabellon, que un aula es un tipo de aula, que un usuario puede tener muchas 
# reservas y que una aula puede tener muchas reservas pero que una reserva es por 
# aula
# luego de agregar 5 aulas, 2 pabellones, 3 tipos de aulas y 2 usuarios, se desea
# saber cuantas aulas fueron reservadas en el mes de octubre
# saber cuantos auditorios en un determinado pabellon existen
# cuantos usuarios hicieron reservas y cuantas , en orden descendente