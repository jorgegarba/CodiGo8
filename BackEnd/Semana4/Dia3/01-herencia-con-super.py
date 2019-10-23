class Persona():
    def __init__(self, nombre, edad, nacionalidad, dni):
        self.nombre = nombre
        self.edad = edad
        self.nacionalidad = nacionalidad
        self.dni = dni

    def descripcion(self):
        print("Hola me llamo: {}, tengo, {} años, soy {} y mi DNI es: {}".format(
            self.nombre, self.edad, self.nacionalidad, self.dni))


class Empleado(Persona):
    def __init__(self, salario, antiguedad, nombre_empleado, edad_empleado, nacionalidad_empleado, dni_empleado):
        super().__init__(nombre_empleado,edad_empleado,nacionalidad_empleado,dni_empleado)
        self.salario = salario
        self.antiguedad = antiguedad

    def descripcion(self):
        super().descripcion()
        print("Mi salario es de: {} y trabajo hace {} años".format(self.salario,self.antiguedad))

Juan = Persona("Juan",25,"Arequipeño",29231548)
Juan.descripcion()

Pedro = Empleado(950.00,"3","Pedro",22,"Peruano",72654785)
Pedro.descripcion()
# PRINCIPIO DE SUSTITUCION: "es siempre un/una" pero no necesariamente a la inversa
# isinstance => si es una instancia de esa clase retorna TRUE y sino lo es, retorna FALSE
