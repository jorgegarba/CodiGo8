# secuencia de caracteres que forma una busqueda de un patron
# sirve para verificar una cadena de texto si contiene un
# patron especifico
import re
texto = "Hola, mi nombre es Eduardo"
print(re.search("nombre", texto))
if(re.search("nombre", texto)):
    print("Se encontro la palabra nombre")
else:
    print("No se encontro la palabra a buscar")

# Buscar la palabra pero al final de la oracion
print(re.search("Eduardo$", texto))

# Buscar la palabra por el inicio de la oracion
print(re.search("^Hola", texto))

# findall => busca todas las coincidencias que hay en un texto
texto2 = """
El auto de Eduardo es azul,
El auto de Jorge es cafe,
El auto de Juan es azul"""
# .* => no importa lo que hay entre esas dos palabras
print(re.findall("auto.*azul",texto2))
texto3= "Es lunes y el cielo es azul lunes"
# sirve para separar lo que esta contenido en una cadena de texto
print(re.split(" ",texto3))
# sirve para reemplazar la palabra a buscar por la nueva
# palabra como segundo parametro
print(re.sub("lunes","viernes",texto3))

# Como sacar codigo ascii
print(ord("a"))
# Como imprimir en base al codigo ascii
print(chr(97))