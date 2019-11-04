# crear una tabla alumno que tenga su id_alumno, nombre, apellido, grado,
# fecha de nacimiento
# y una tabla curso que tenga id_curso, nombre_curso, dificultad
# y una relacion de muchos a muchos
# para la tabla alumno ingresar
#	id_alumno	nombre			apellido	grado	fec_nac
#	001			Eduardo			Juarez		Quinto	1992-08-01
#	002			Christopher		Rodriguez	Cuarto	1993-07-10
#	003			Raul			Pinto		Primero	1996-02-05
#	004			Cristina		Espinoza	Quinto	1992-10-21
#	005			Valeria			Acevedo		Cuarto	1993-05-18
# para la tabla curso ingresar
#	id_curso	nom_curso		dificultad
#	001			Matematica I	Facil
#	002			Fisica I		Facil
#	003			Matematica II	Intermedio
#	004			CTA				Dificil
#	005			Biologia		Dificil 
# todos los de quinto llevan Fisica I y cta, todos los de cuarto llevan matematica II y Biologia y
# todos los de primero llevan matematica I y matematica II
create database if not exists semana6;
use semana6;
create table if not exists alumnos(
	id_alumno int not null auto_increment primary key,
    nombre varchar(40),
    apellido varchar(40),
    grado varchar(20),
    fecha_nacimiento date
);
create table if not exists cursos(
	id_curso int not null auto_increment primary key,
    nombre_curso varchar(40),
    dificultad varchar(30)
);
create table if not exists alumno_curso(
	id_alumno_curso int not null auto_increment primary key,
    id_alumno int,
    id_curso int,
    foreign key (id_alumno) references alumnos(id_alumno),
    foreign key (id_curso) references cursos(id_curso)
);

insert into alumnos (nombre,apellido,grado,fecha_nacimiento) values 
('Eduardo','Juarez','Quinto','1992-08-01'),
('Christopher','Rodriguez','Cuarto','1993-07-10'),
('Raul','Pinto','Primero','1996-02-05'),
('Cristina','Espinoza','Quinto','1992-10-21'),
('Valeria','Acevedo','Cuarto','1993-05-18');
insert into cursos (nombre_curso,dificultad) values 
('Matematica I','Facil'),
('Fisica I','Facil'),
('Matematica II','Intermedio'),
('CTA','Dificil'),
('Biologia','Dificil');
insert into alumno_curso (id_alumno, id_curso) values 
(1,2),(4,2), # todos los de quinto llevan Fisica I
(1,4),(4,4), # todos los de quinto llevan CTA
(2,3),(5,3), # todos los de cuarto llevan Matematica II
(2,5),(5,5), # todos los de cuarto llevan Biologia
(3,1),(3,3); # todos los de primero llevan Matematica I y Matematica II
# hacer una sentencia para que me muestre : 
# nombre_alumno(Nombre)		apellido_alumno(Apellido)		nombre_curso(Curso)

select A.nombre as Nombre,A.apellido as Apellido,C.nombre_curso as Curso from alumno_curso as Puente
inner join alumnos as A on Puente.id_alumno = A.id_alumno
inner join cursos as C on Puente.id_curso = C.id_curso
# la clausula where se utiliza para condicionales y siempre va despues del FROM
WHERE C.nombre_curso LIKE '%mate%' and A.apellido = 'Pinto';

# SELECT campos
# FROM nombre_tabla [JOINS]
# WHERE condicion [AND|OR]

# traer todos los alumnos que nacieron entre 1992 y 1994
# function date => year(fecha_nacimiento)

select * from alumnos where year(fecha_nacimiento) >= 1992 and year(fecha_nacimiento) <=1994;

# funciones de strings
# https://dev.mysql.com/doc/refman/8.0/en/string-functions.html