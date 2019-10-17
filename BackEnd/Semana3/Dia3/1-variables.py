# para definir variables numericas
numero = 1
numerodecimal = 10.5
# para definir variables de texto
texto = 'Soy un texto'
texto2 = "Soy otro texto"
# para ver el tipo de la variable
print(type(texto))
# Para definir una variable tiene que
# comenzar con una letra o con un simbolo de _
# NUNCA CON UN NUMERO
_a = 5

# Hay dos tipos de variables (objetos): los inmutables y los mutables
# Los inmutables son los que no se pueden modificar (numeros, cadenas, etc)
# Los mutables son los que se pueden modifcar (Las listas y los diccionarios)

# Para eliminar una variable se usa el prefijo del y asi liberara espacio de memoria
del numero

# Hay palabras reservadas que no pueden ser usadas como nombres de variables
# lambda = 5

variable1 = 10
variable2 = 8.5
variable3 = True
variable4 = "Miercoles"
variable5 = [10, "Juan", 8.5]
print(type(variable1))
print(type(variable2))
print(type(variable3))
print(type(variable4))
print(type(variable5))

# Definir varias variables en una sola linea de codigo
# En este caso a=10 y b=18
a, b = 10, 18

# Objetos inmutables
# cada objeto (o variable) ocupa un espacio de memoria por separado
a = 15
b = a
a = 10
print(b, a)

# Objeto mutable
# en el caso de que si su valor interno cambia todos apuntan al mismo 
# espacio de memoria

a = [10, 11]
b = a
print(a,b)
a[0] = 20
print(a,b)
