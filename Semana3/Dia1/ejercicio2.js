// var colores = [20, 50, 80];
var colores=[];
azul = +prompt("Ingrese cuantos focos azules hay");
colores.push(azul);
rojo = +prompt("Ingrese cuantos focos rojos hay");
colores.push(rojo);
verde = +prompt("Ingrese cuantos focos verdes hay");
colores.push(verde);
for (let color = 0; color < colores.length; color++) {
    switch (color) {
        case 0:
            console.log(`Hay ${colores[color]} focos azules`);
            break;
        case 1:
            console.log(`Hay ${colores[color]} focos rojos`);
            break;
        case 2:
            console.log(`Hay ${colores[color]} focos verdes`);
            break;
        default:
            break;
    }
}