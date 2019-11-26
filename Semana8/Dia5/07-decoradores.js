var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador() {
    return function (clase) {
        clase.prototype.hoy = (new Date()).getFullYear();
        clase.prototype.saludar = function () {
            console.log("estoy saludando");
        };
    };
}
var Aula = /** @class */ (function () {
    function Aula(_capacidad, _tipo) {
        this.capacidad = _capacidad;
        this.tipo = _tipo;
    }
    Aula.prototype.imprimirDatos = function () {
        console.log("Capacidad: " + this.capacidad);
        console.log("Tipo: " + this.tipo);
    };
    Aula = __decorate([
        decorador()
    ], Aula);
    return Aula;
}());
var objAula = new Aula(80, "Laboratorio");
console.log(objAula.hoy);
objAula.saludar();
