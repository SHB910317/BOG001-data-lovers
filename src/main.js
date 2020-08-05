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
  
  function abrirModal(name,blurb,tags,info){
    console.log(name,blurb,tags,info)

    document.getElementById("nameModal").textContent= name;
    document.getElementById("blurbModal").textContent=blurb;
    document.getElementById("infoModal").textContent=info;
    document.getElementById("tagsModal").textContent=tags;

    let span= document.getElementById("cierre");
    span.onclick = () => {
    modals.style.display = "none";
    console.log(span)
    }
    
  }

  function characters (charactersData){
    console.log(charactersData)
    for ( let character in charactersData)  {
         console.log(charactersData[character].name)
  
      let tarjetas = document.createElement ("div");
      tarjetas.classList.add ("personajes");
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
      
      let title = document.createElement("h2"); // Se crea otra variable para crear el elemento img 
      title.innerHTML= charactersData[character].title; // para darle un atributo a ese elemnto se llama la variable. ___ y se coloca el nombre del atributo
      tarjetas.appendChild(title);
      console.log (title)


      tarjetas.addEventListener("click", () => { 

        abrirModal(charactersData[character].name,charactersData[character].blurb,charactersData[character].info.attack,charactersData[character].tags);
        modals.style.display = "block";
      }) ;

      

     

    



 
      
      
  
      }



      }


  fetchData();

    




