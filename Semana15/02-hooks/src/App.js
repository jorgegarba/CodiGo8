import React, {useState, useEffect} from 'react';

function App() {
  //Hooks es lo primerito que debe ir si o si
  //   nom_state, setState      estado inicial
  let [contador, setContador] = useState(0);
  let [texto, setTexto] = useState('');
  let [toggle, setToggle] = useState(false);

  {
  //MAL! MUY MAL!!!!!!!!!!!!!
  // let [estado, setEstado] = useState({
  //   contador:0,
  //   texto:'',
  //   toggle:false
  // });

  //state = {
  //   contador:0,
  //    texto:""
  // }
  }

  //recibe una función a ejecutar
  useEffect(()=>{
    //cuando haya montaje de algo o alguna actualización
    //se ejecutará esta funcioncita
    console.log("Ejecutando el useEffect");
  },[contador])

  useEffect(()=>{
    console.log("ejecutando el useEffect del Input");
  },[texto])

  return (
    <div>
      <span>El contador esta en : {contador}</span>
      {/* setContador o la funcion que declaremos como 2do parametros sera la funcion que actualice el valor inicial */}
      <button onClick={() => {setContador(contador + 1)}}>Incrementar Contador</button>
      <input value={texto} onChange={(e) => {setTexto(e.target.value)}} />
      <span>{texto}</span>
    </div>
  );
}

export default App;
