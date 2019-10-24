class Persona:
    def __init__(self):
        self.__nombre = ''
        self.__direccion=''
        self.__fono=''
    def __mayoredad(self):
        pass
    def setearVariables(self,nombre,direccion,telefono,edad):
        self.__nombre=nombre
        self.__direccion = direccion
        self.__fono = telefono
        self.__edad= edad
        if (self.__edad>18):
            self.__mayoredad()

    def setname(self, name):
        print('el setname() ha sido llamado')
        self.__nombre = name

    def getname(self):
        print('el getname() ha sido llamado')
        return self.__nombre
    
    def delname(self):
        print('el delname() ha sido lladamo')
        del self.__nombre
    # La funcion property sirve para definir nuestras funciones de get, set, delete
    name = property(getname, setname, delname)


persona1 = Persona()
# persona1.__name
persona1.name = "Eduardo"
nombre = persona1.name
del persona1.name
# print(nombre)