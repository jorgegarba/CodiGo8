dia = input("Ingrese el dia de la semana")
monto = int(input("Ingrese el monto"))

if(dia == "lunes"):
    if(monto >= 10) and (monto <= 20):
        print("Puedes ir al cine")
    elif (monto > 20):
        print("Puedes comerte una salchipapa")
    else:
        print("No te alcanza para nada")
elif (dia == "martes"):
    if(monto >= 15) and (monto <= 25):
        print("Puedes comer una pizza 2x1")
    elif (monto > 25) and (monto <= 40):
        print("Puedo comer una pizza familiar")
    elif (monto > 40):
        print("Puedo comerme un pollo a la brasa")
    else:
        print("No te alcanza para nada")
elif(dia == "miercoles"):
    if(monto>=20) and (monto<=30):
        print("Puedo comerme un KFC")
    elif (monto>30):
        print("Puedo comerme un PP's")
    else:
        print("Puedo comerme un King Broaster")
else:
    print("Puedo comer lo que quiera")