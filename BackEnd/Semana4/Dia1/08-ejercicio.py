import re

texto = input("Ingrese la cadena a convertir: ")
arreglo = re.split(" ",texto)

texto_capitalizado = ""
for palabra in arreglo:
    for letra in range(palabra.__len__()):
        if(letra==0):
            if(ord(palabra[0])>=97 and ord(palabra[0])<=122):
                ascii_mayus=int(ord(palabra[0]))-32
                texto_capitalizado +=chr(ascii_mayus)
            else:
                texto_capitalizado +=palabra[letra]
        else:
            texto_capitalizado +=palabra[letra]
    texto_capitalizado += " "
    # texto_capitalizado +=palabra.capitalize()+" "

print(texto_capitalizado)