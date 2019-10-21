class Persona:
    # Este es el constructor de la clase
    # se usa self para instanciar todos los atributos de la clase, se crean
    # en el constructor y se pueden utilizar en todos los metodos
    def __init__(self, nom, ed):
        self.nombre = nom
        self.edad = ed
    def saludar(self):
        print("Hola, me llamo {0} y tengo {1} años".format(self.nombre,self.edad))

persona1 = Persona("Eduardo",25)
print(persona1.nombre)
persona1.saludar()

# crear una clase persona que tenga de atributos sus datos personales 
# (nombre,apellido,edad) y su experiencia laboral , que se ingrese por un menu 
# la opc 1 para ingresar nueva experiencia laboral, 
# que la opc 2 la muestre y 
# que la opc 3 la elimine y que
# la opcion 4 salga del programa
