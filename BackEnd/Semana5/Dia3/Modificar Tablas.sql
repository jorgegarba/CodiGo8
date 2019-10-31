use codigo8;
# para agregar una nueva columna se modifica la tabla con ALTER TABLE
# y para agregar se usa ADD COLUMN nombre_columna tipo_columna
# Opcionalmente podemos decir en que posicion usando AFTER nombre_columna
# y si la queremos al comienzo ponemos FIRST
alter table empleados add column dni int after nombre_empleado;
select * from empleados;

# DROP COLUMN sirve para eliminar una columna siempre y cuando no sea PK y 
# tenga herencia
alter table empleados drop column dni;

# MODIFY sirve para modificar una columna por su tipo de dato o sus
# restricciones
alter table empleados MODIFY dni varchar(25);