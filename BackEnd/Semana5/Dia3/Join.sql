use codigo8;
CREATE TABLE Departamentos(
	id_departamento int auto_increment not null,
    nombre_departamento varchar(100),
    primary key(id_departamento)
);
CREATE TABLE Empleados(
	id_empleado int auto_increment not null primary key,
    nombre_empleado varchar(50),
    departamento_id int,
    foreign key (departamento_id) references Departamentos(id_departamento)
);

INSERT INTO Departamentos VALUES (1,'Ventas');
INSERT INTO Departamentos VALUES (2,'Administracion'),
(3,'Finanzas'),
(4,'Marketing');

Insert into Empleados (id_empleado,nombre_empleado,departamento_id) values 
(1,'Juancho Rodriguez', 2),
(2,'Ana Lisa Polanco',1),
(3,'Heisenberg',3),
(4,'Rosa Melgrano',2),
(5,'Devora Meltrozo', 3),
(6,'Esteban Quito',NULL);

# el inner join hace que nos trae la interseccion de las dos tablas (pueden ser
# mas de dos)
# si nosotros ponemos solo join se sobre entiende que es inner join
SELECT * from empleados inner join departamentos 
on empleados.departamento_id = departamentos.id_departamento;
# selecioname todos los campos de empleados que tengan en comun con departamentos cuando
# empleados.departamento_id = departamentos.id_departamento

# left join
Select E.nombre_empleado, D.nombre_departamento from empleados as E left join 
departamentos as D on E.departamento_id = D.id_departamento;

# right join
Select E.nombre_empleado, D.nombre_departamento from empleados as E right join 
departamentos as D on E.departamento_id = D.id_departamento;

# full outer join
Select E.nombre_empleado, D.nombre_departamento from empleados as E left join 
departamentos as D on E.departamento_id = D.id_departamento UNION
Select E.nombre_empleado, D.nombre_departamento from empleados as E right join 
departamentos as D on E.departamento_id = D.id_departamento;
