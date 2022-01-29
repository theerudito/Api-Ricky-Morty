const input = document.getElementById("nombre")
const boton = document.getElementById("buscar")
const pokemonContainer = document.getElementById("pokemon-container")




function clearBox(pokemonContainer) { 
  document.getElementById(pokemonContainer).innerHTML = ""; }



boton.addEventListener("click", (e) => {
  e.preventDefault()
  traerPersonaje(input.value)
  
})

//==================CON ASYNC Y AWAIT======================
const traerPersonaje = async (id) =>  {
      try { 

        //`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}/`
        const res = await  fetch("https://rickandmortyapi.com/api/character/id")
        console.log(res);
        const data = await res.json()
        crearPersonaje(data)
        document.getElementById("myForm").reset();
        console.log(data);



      
    } catch (error) {
      console.log(error);
    }
  }
  //==================CON ASYNC Y AWAIT======================

  
    //===============OBTENER DATOS APARTE=======================
    fetch("https://rickandmortyapi.com/api/character")
      //.then((res) => console.log(res))
      .then((res) => res.json())
      .then(data => console.log(data))
    //===============OBTENER DATOS APARTE=======================
  //} 
  //==================CON FUNCION============================  

   
    
traerPersonaje()


function crearPersonaje (character) {

      const img = document.createElement("img")
      img.src = ('src', character.results[0].image);
      
      const ID = document.createElement("h6")
      ID.textContent = `Nombre: ${character.results[0].id}`;
      

      const nombre = document.createElement("h6")
      nombre.textContent = `Nombre: ${character.results[0].name}`;

      const genero = document.createElement("h6")
      genero.textContent = `Genero: ${character.results[0].gender}`;

      const locacion = document.createElement("h6")
      location.textContent = `Location: ${character.results[0].location.name}`;

      const status = document.createElement("h6")
      status.textContent = `Estatus:  ${character.results[0].status}`;
      
      const especie = document.createElement("h6")
      especie.textContent = `Especie:  ${character.results[0].species}`;
      
      
      
      

  
      
      
      const div = document.createElement("div")
      div.appendChild(img)
      div.appendChild(ID)
      div.appendChild(nombre)
      div.appendChild(genero)
      div.appendChild(locacion)
      div.appendChild(status)
      div.appendChild(especie)
      
      
      pokemonContainer.appendChild(div)
  }
