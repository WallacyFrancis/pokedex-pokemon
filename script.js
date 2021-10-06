const apeendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name} <br/> ${img.outerHTML}`;
  // a propriedade outerHTML define um elemento img para html
  
  ul.appendChild(li);
}

const fecthPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/blastoise')
    .then((response) => {
      response.json().then((data) => {
        apeendPokemon(data)

        fetch('https://pokeapi.co/api/v2/pokemon/kakuna')
          .then((response) => {
            response.json().then((data) => {
              apeendPokemon(data)
              
              fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
                .then((response) => {
                  response.json().then((data) => {
                    apeendPokemon(data)

                    fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
                      .then((response) => {
                        response.json().then((data) => {
                          apeendPokemon(data)
                      })
                    });
                 })
              });
            })
        });
      })
  });
};

window.onload = fecthPokemon()