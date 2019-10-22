class Vehiculo():
    # largo =200
    # ancho = 130
    # ruedas = 4
    # enMarcha = False
    def __init__(self, largo=200, ancho=130, enMarcha=False, motor=1500):
        self.largo = largo  # public
        self.ancho = ancho
        self.__ruedas = 4  # para volver privado el atributo se pone __ al inicio
        self.enMarcha = enMarcha
        self.motor = motor
    # metodo : es una funcion especial que pertenece exclusivamente
    # a la clase donde se esta creando
    # funcion : no perternece a ninguna clase

    def arrancar(self,arrancamos):
        self.enMarcha = arrancamos
        if(self.enMarcha):
            chequeo = self.__chequeo_interno()
        if(self.enMarcha and chequeo):
            return "El coche esta en marcha sin ningun problema"
        elif (self.enMarcha and chequeo == False):
            return "El coche esta en marcha pero tiene algun problema"
        else:
            return "El coche esta parado"

    def estado(self):
        print("El auto tiene de ancho:", self.ancho, "\nDe largo: ", self.largo,
              "\nNum de ruedas: ", self.__ruedas, "\nMotor: ", self.motor)
    
    def __chequeo_interno(self): # encapsulamos el metodo para que solo pueda ser invocado dentro de la clase
        """Metodo de la clase vehiculo que sirve para hacer una revision del vehiculo antes de arrancar"""
        self.gasolina = 30
        self.aceite = "ok"
        self.temperatura = 0
        self.puertas = "cerradas"
        if(self.gasolina>25 and self.aceite == "ok" and self.temperatura<60 and self.puertas=="cerradas"):
            return True
        else:
            return False
    
    def __str__(self):
        return "Largo:"+str(self.largo)+"\nAncho: "+str(self.ancho)+"\nRuedas: "+str(self.__ruedas)

# instanciar una clase / ejemplarizar una clase / crear un objeto
miAuto = Vehiculo(largo=150)
print(miAuto)
# miAuto.__ruedas = 1
# print(miAuto.arrancar(True))
# print(miAuto.__chequeo_interno()) #al hacer el metodo privado ya no se puede acceder a el fuera de la clase
# print("El largo del auto es: ", miAuto.largo)
# miAuto.estado()


### TEORIA

# que es encapsular? Encapsular es un pilar de la POO que nos dice, que podemos
# seleccionar qué atributos y métodos queremos que se muestren fuera de la clase
# y qué atributos y métodos no pueden ser modificados fuera de la misma. es volver
# privada un atributo o método

# cuando encapsular metodos o atributos?
# tu debes encapsular tus metodos y tus atributos cuando tu clase asi lo necesite y eso
# depende del comportamiento que quieres de esa clase

# modularizacion : una clase puede estar compuesta de otras clases (modulos), pero cada 
# uno funciona de manera independiente

# EJERCICIO
# crear una clase llamada Coordenadas y que va a tener como atributos X y Y, en su constructor debe
# recibir los valores y sino recibe uno o los dos valores el valor por defecto es 0
# tener un metodo para ver cuales han sido los valores ingresados en el formato (x,y)
# tener un metodo para ver en que cuadrante esta
#   2  |  1
# _____|_____
#    3 |  4
#      |
# añadir un metodo llamado otro_vector y que tome otras coordenadas y calcule el vector resultante
# entre los dos puntos => ((x2-x1),(y2-y1))
# PLUS: calcular la distancia entre los dos puntos => d= sqrt((x2-x1)**2 + (y2-y1)**2) y que tbn de como
# resultado su vector resultante (el metodo vector_resultante debe ser privado)