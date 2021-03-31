import axios from "axios";

const BASE_URL = "http://localhost:3001";

const getPokemons = () => {
  return axios(`${BASE_URL}/api/pokemon`);
};

const addPokemon = (form, evolutions) => {
  const { number, name, type, color } = form;

  const evolutionsTransform = evolutions.map((evolution) => {
    return {
      id: evolution.number,
      name: evolution.name,
      type: evolution.type,
      color: evolution.color,
    };
  });

  const body = {
    pokemon: {
      id: number,
      name,
      type,
      color,
      evolutions: evolutionsTransform,
    },
  };
  return axios.post(`${BASE_URL}/api/pokemon`, body);
};

const updatePokemon = (data) => {
  return axios.put(`${BASE_URL}/api/pokemon`, data);
};

const deletePokemon = (id) => {
  return axios.delete(`${BASE_URL}/api/pokemon/${id}`);
};

export {
  getPokemons as getPokemonsService,
  addPokemon as addPokemonService,
  updatePokemon as updatePokemonService,
  deletePokemon as deletePokemonServise,
};
