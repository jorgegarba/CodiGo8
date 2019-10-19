# para definir una funcion se utiliza el prefijo def
def saludar():
    """FUNCION QUE TE SALUDA"""
    print("Hola como estas")


def saludarConNombre(nombre, anio):
    """Funcion que saluda con tu nombre y te dice tu edad"""
    print("Hola {} buenas tardes, tienes {} años".format(nombre, anio))


# saludar()
# saludarConNombre("Eduardo", 25)

def sumar(a, b):
    suma = a+b
    return suma

# resultado = sumar(10,2)

def restar(a,b):
    return a-b

resultado = restar(b=5, a=10)
# print(resultado)

# la variable *args es una lista dinamica de elementos para recibir 
# un numero indeterminado de variables
def indeterminada (*args):
    for elemento in args:
        print(elemento)

# indeterminada(20,"Viernes",[1,2,3,4,5])

# **kwargs: keywords args es una variable para recibir un numero ilimitado 
# de parametros pero usando los diccionarios
diccionario = {"clave1":"valor1"}

def indeterminada_diccionario (**kwargs):
    print(kwargs)
#indeterminada_diccionario(n=5,c="Eduardo",l=[1,2,3,4,5])

def raiz_cuadrada(numero):
    pass

def funcion():
    return 18, "Viernes", ["Verano","Otoño","Primavera","Invierno"]

dia, nombre_dia,estaciones =funcion()
print(dia, nombre_dia,estaciones)