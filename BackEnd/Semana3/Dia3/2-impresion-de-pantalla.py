# Este es un comentario

nombre = "Eduardo"
print(nombre)
# Texto con variables, Modo I
print("Mi nombre es: ",nombre)
# Modo II
edad= 18
print("Mi nombre es: {} y tengo {} años".format(nombre,edad))
# Modo III : modificando orden de variables a imprimir
print("Tengo {1} años y mi nombre es {0}".format(nombre,edad))
# Modo IV: concatenando texto y variables en una linea
print(f"Tengo {edad} años y mi nombre es {nombre}")
# Modo V: Restringir la cantidad de decimales de una variable
pi=3.1415161828323828
print(f"La variable tiene el valor de: {pi:1.3f}")
