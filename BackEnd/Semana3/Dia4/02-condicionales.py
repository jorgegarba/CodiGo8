# condiciona if else elif
a = 3
b = 4
# print(a > b)
# if (a > b):
#     print("a es mayor que b")
# else:
#     print("b es mayor que a")
# elif -> verifica esta otra condicion a ver si
# es correcta, tiene que ir antes de el else
num = 8
# if(num>0):
#     print("Es un numero positivo")
# elif (num==0):
#     print("Es cero")
# else:
#     print("Es negativo")

# for -> es usado para iterar sobre una secuencia
# de elementos
cadena = "Buenos dias"
# for letra in cadena:
#     print(letra,end="\n")
# for (let i=0 ; i<10; i++)
# for i in range(0,10,3):
#     print(i)

# break -> para parar el bucle
# for numero in range(0,10):
#     if(numero==5):
#         break
#     print(numero)

# continue -> para parar SOLO la iteraccion actual
# for numero in range(10):
#     if(numero==6):
#         continue
#     print(numero)

# for doble
# for numero1 in range(4):
#     for numero2 in range(3):
       # print(numero1,numero2)
#
# while -> un bucle infinito de acciones mientras sea cierta la condicion
valor = 1
fin = 10
# while(valor<fin):
#     print(valor)
#    valor += 1 # valor ++
# pass -> no hace nada, solo indica que pase a la siguiente iteracion

# Ejercicio: que de una lista de numeros
numeros = [1,2,3,4,5,6,7,8,9]
#guarde todos los pares en la lista numeros_pares y los impares en la lista 
# numeros_impares y que muestre las listas y la lista de numeros debe quedar vacia
numeros_pares=[]
numeros_impares=[]
for numero in numeros:
    if(numero%2==0):
        numeros_pares.append(numero)
    else:
        numeros_impares.append(numero)
print(numeros_pares)
print(numeros_impares)
numeros.clear()
print(numeros)
