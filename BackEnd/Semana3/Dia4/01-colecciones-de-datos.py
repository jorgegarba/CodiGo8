# lista
colores = ["rojo", "azul", "verde", "amarillo"]
# print(colores)
# imprime el ultimo item de la lista
# print(colores[-1])
# imprime desde la posicion 0 hasta <2
# print(colores[0:2])
# imprime desde la primera posicion hasta el final
# print(colores[1:])

# Todas las formas de impresion de las listas tambien sirven
# para los string
texto = "Hola Gente"
# print(texto[-1])

# Metodo para agregar nuevos datos a la lista
colores.append("morado")
# print(colores)

# Metodo para quitar un objeto de la lista
colores.remove("azul")
# print(colores)

# Metodo para limpiar toda la lista, eliminar todos sus objetos
colores.clear()
# print(colores)

# Tuplas -> coleccion de elementos ordenada QUE NO SE PUEDE MODIFICAR,
# es inalterable y sirve para usar elementos que nunca se van a modificar
# en nuestro programa
tupla_nombres = ("Luis", "Jorge", "Christian", "Luis")
# print(tupla_nombres)
# Para ver la longitud de la tupla
# print(len(tupla_nombres))
# Para ver cuantos elementos repetidos en los parentesis tenemos
# print(tupla_nombres.count("Luis"))
# print(type(tupla_nombres))

# Conjuntos -> coleccion de elementos desordenada, osea, no tiene indice para acceder
# a sus elementos
conjunto = {"verano", "primavera", "otoño", "invierno"}
# print(conjunto)
# for estacion in conjunto:
    # print(estacion)
conjunto.add("otra estacion")
# print(conjunto)
# print(conjunto[1])

# diccionarios -> coleccion de elementos que estan indexados, no estan ordenados y
# se puede modificar sus valores. Estan conformados por una clave y un valor
estaciones = {
    "verano":"diversion", 
    "primavera":"flores", 
    "otoño":"amarillento",
    "invierno":"paneton"
}
# print(estaciones)
# print(estaciones["verano"])
estaciones["ninguno"]="soledad"
# print(estaciones)
# 1ra forma de borrar
estaciones.pop("primavera")
# 2da forma de borrar
del(estaciones["ninguno"])
# print(estaciones)
for clave, valor in estaciones.items():
    print(clave,valor)