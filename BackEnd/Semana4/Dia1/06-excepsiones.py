# excepciones => try ... except... else ... finally
try:
    # TODO lo que va a suceder dentro del try y si
    # hay un error no va a incidir con el funcionamiento
    # de nuestro programa
    numero1 = int(input("Ingrese numero 1: "))
    numero2 = int(input("Ingrese numero 2: "))
    division = numero1/numero2
    print(division)
except ZeroDivisionError:
    print("No puedes dividir entre 0 pues")
except:
    # print(EnvironmentError) para ver que error es el que tenemos
    print("Hubo un error al ingresar datos")
else:
    print("La division funciono bien")
finally:
    print("No me importa si funciono la division o no")

exito = 0
while(exito==0):
    try:
        numero3 = int(input("Ingrese el numero 1: "))
        numero4 = int(input("Ingrese el numero 1: "))
        rpta = numero3*numero4
        print(rpta)
        exito = 1
    except:
        print("No puedes ingresar texto, vuelve a intentar.")
        exito = 0
