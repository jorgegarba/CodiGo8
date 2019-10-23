class Perros():
    def __init__(self, ladrar, gruñir, nombre):
        self.ladrar = ladrar
        self.nombre = nombre
        self.gruñir = gruñir

    def estado(self):
        return "Mi perro se llama {} y puede, \nLadrar: {}\nGruñir:{}".format(self.nombre, self.ladrar, self.gruñir)


class Caniche(Perros):
    def __init__(self, raza, ladrar, gruñir, nombre):
        self.raza = raza
        super().__init__(self, ladrar, gruñir, nombre)

    def estado(self):
        return super().estado(), "\nSu raza es: {}".format(self.raza)


class Pastor_Aleman(Perros):
    def __init__(self, raza, ladrar, gruñir, nombre):
        self.raza = raza
        super().__init__(ladrar, gruñir, nombre)

    def estado(self):
        return super().estado(), "\nSu raza es: {}".format(self.raza)


class Shepadoodle(Caniche, Pastor_Aleman):
    def __init__(self, raza, ladrar, gruñir, nombre):
        Caniche.__init__(self, raza, ladrar, gruñir, nombre)
        Pastor_Aleman.__init__(self, raza, ladrar, gruñir, nombre)


miPerro = Shepadoodle("Shepadoodle", "Si", "Si", "Barto")
print(miPerro.estado())

# Crear una clase llamada Alumno que tenga como atributos su nombre sus apellidos y un arreglo con
# sus 5 ultimas notas(privado) definir un metodo para ver su promedio y ver si ha aprobado el curso o no

# Crear una clase llamada Agenda que pueda almacenar contactos por medio de un diccionario y que
# este compuesta por: nombre, telefono y correo. Debe de tener un metodo de agregar_contacto,
# mostrar_contactos, buscar_contactos por nombre
tupla = {
    "persona1":{
        "nombre": "eduardo",
        "correo": "ederiveroman.com"
    },
    "persona2":{
        "nombre": {
            "primer_nombre":"Eduardo",
            "segundo_nombre":"Ramiro"
        },
        "correo":"correo.com"}
}
dict(tupla)
import json
json.dumps(dict(tupla))
