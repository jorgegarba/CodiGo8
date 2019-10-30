# Tipos de datos

# NUMERICOS (Los mas importantes)
# int: que acepta valores desde -2147483648 a 2147483647
# tinyint: -128 a 127
# smallint: -32768 a 32767
# float(m,d): "m"=> cantidad de numeros vamos a tener y "d"=> la cantidad de decimales

# TIEMPO Y FECHA
# date: su formato es YYYY-MM-DD desde el  1000-01-01 hasta el 9999-12-31
# datetime: su formato es YYYY-MM-DD HH:MM:SS
# timestamp: que no usa guiones ni dos puntos su formato es YYYYMMDDHHMMSS
# time: guarda HH:MM:SS

# STRING
# char(l): atributo que admite caracteres y entre parentesis se pone su longitud, 
# sino se pone, toma el valor por defecto de 1.
# varchar(l): este atributo lo que hace es separa espacio de memoria dinamicamente,
# es decir, si nosotros le pones una longitud de 30 caracteres pero solo ingresamos
# 10, solamente va a usar el espacio de memoria para los 10 caracteres. Entonces su
# longitud sera la longitud MAXIMA.
# text: es un tipo de atributo con un maximo de 65535 caracteres, generalmente se usa
# para las contraseñas encriptadas.

# Para nosotros crear una tabla necesitamos saber:
# * el nombre de la tabla
# * el nombre de los campos o atributos
# * la definicion de cada campo
# un ejemplo 
# CREATE TABLE nombre_tabla ( nombre_de_la_coluna tipo_de_la_columna )
# aparte de definir el nombre y tipo se pueden añadir opciones extras, como por ej:
# NOT NULL => eso va a permitir que cuando queramos ingresar o editar una tupla 
# no podamos dejarla en blanco o nula.
# AUTO_INCREMENT => eso va de la mano si es una columna de tipo int y va a 
# autoincrementarse de uno en uno, generalmente se usa para las llaves primarias (PK)
# PRIMARY KEY => es usada para definir que una columna va a ser la llave primaria de 
# nuestra tabla, por lo que no se puede repetir en alguna tupla.

# Para tener una tabla, primero tenemos que decir donde se va a crear esa tabla (en
# MySQL las bases de datos se llaman SCHEMA) para crear un nuevo SCHEMA se usar lo 
# siguiente:
# create schema nombre_bd
# Y para alternar entre difentes SCHEMA's se usa el comando:
# use nombre_bd
create schema codigo8;
use codigo8;

# para ejecutar una parte del SCRIPT (es el archivo de base de datos) se selecciona y 
# se presiona el rasho o Ctrl+Enter

create table alumno(
	id_alumno int not null auto_increment primary key,
	nombre varchar(40),
	apellido varchar(50),
	email varchar(35)
);

# La forma de eliminar una tabla es :
# drop table nombre_tabla;
# NOTA: no podemos eliminar una tabla que tenga relacion de herencia, primero
# se elimina a los hijos y luego al padre
drop table alumno;

# Insertar una nueva tupla a una tabla es de la siguiente forma:
# insert into nombre_tabla (campos) values (valores);
insert into alumno (nombre,apellido,email) 
values ('Eduardo','De Rivero', 'ederiveroman@gmail.com');


# para hacer una relacion de llave foranea se usa la palabra 
# foreign key (nombre_del_campo) references nombre_de_la_tabla_padre(nombre_de_su_pk)
create table cuadernos(
	id_cuaderno int primary key not null auto_increment,
    tamanio varchar(40),
    alumno_id int,
    foreign key (alumno_id) references Alumno(id_alumno)
);

# para visualizar el contenido de una tabla se usa el siguiente comando
# select nombre_campo, nombre_Campo_1 from nombre_tabla [where condicion]
# select: selecciona los siguientes campos
# from: desde que tabla o tablas
# where: es un campo opcional para poner ciertas restricciones
# NOTA: Si queremos seleccionar todos los campos de una tabla, usamos el *

select * from alumno;

# Para eliminar el contenido de nuestra tabla usamos el siguiente comando:
# delete from nombre_tabla;
# delete es para eliminar, * es todos los campos, y que tabla vamos a eliminar
# NOTA: Opcionalmente se puede usar el where para especificar una tupla en 
# especifico y asi no bajarnos toda la tabla
delete from alumno where id_alumno=2;

insert into cuadernos (tamanio, alumno_id) values ('A4',1);
insert into alumno (nombre,apellido,email) values('Jose','Apaza','tuchiquitoporsiempre@hotmail.com');
drop table alumno;
