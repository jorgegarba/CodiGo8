interface iPersona {
  nombre: string;
  apellido: string;
  edad: number;
  apodo?: string;
}


let imprimirDatosPersonales = (persona: iPersona) => {
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Apellido: ${persona.apellido}`);
}

let objJorge: iPersona = {
  nombre: "Jorge",
  apellido: "Garnica",
  edad: 28,
  apodo: "erftghjk"
}
