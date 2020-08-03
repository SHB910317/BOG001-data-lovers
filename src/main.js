/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/

function fetchData () {
    fetch ('./data/lol/lol.json')
    .then(response=> response.json()) // Indicamos el formato en que se desea obtener la información
    .then (result => {
      characters(result.data);
    })
  }
  
  function characters (charactersData){
    console.log(charactersData)
    for ( let character in charactersData)  {
         console.log(charactersData[character].name)
  
      let tarjetas = document.createElement ("div");
      tarjetas.id =("Mymodals")
      tarjetas.classList.add ("personajes");
      //tarjetas.innerHTML= charactersData[character].name; 

      document.getElementById ("container").appendChild(tarjetas);
      console.log(tarjetas)
   // antes de appenchild indicamos en que parte de HTML vamos agregar el nuevo elemento que unimos con appenChild
      let name = document.createElement("h1"); // Se crea otra variable para crear el elemento img 
      name.innerHTML= charactersData[character].name; // para darle un atributo a ese elemnto se llama la variable. ___ y se coloca el nombre del atributo
      tarjetas.appendChild(name);
      console.log (name)

      let images = document.createElement("img"); // Se crea otra variable para crear el elemento img 
      images.classList.add("MyImages")
      images.src= images.innerHTML= charactersData[character].splash; //para darle un atributo a ese elemnto se llama la variable. ___ y se coloca el nombre del atributo
      tarjetas.appendChild(images);
      console.log (images)
      
      let title = document.createElement("h1"); // Se crea otra variable para crear el elemento img 
      title.innerHTML= charactersData[character].title; // para darle un atributo a ese elemnto se llama la variable. ___ y se coloca el nombre del atributo
      tarjetas.appendChild(title);
      console.log (title)
  
  }
  }

  fetchData();
    
//Función de las tarjetas



