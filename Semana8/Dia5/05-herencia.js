var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    return Persona;
}());
var Trabajador = /** @class */ (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador(nombre, apellido, edad, cargo) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.cargo = cargo;
        return _this;
    }
    return Trabajador;
}(Persona));
var objTra1 = new Trabajador("Jorge", "Garnica", 28, "Docente");
console.log(objTra1.nombre);
