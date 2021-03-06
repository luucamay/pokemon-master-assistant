// get pokemon data here or receive data from index js?

export const sortPokemon = (pokemonArray, sortOrder) => {
  if (sortOrder === 'frequency') {
    return pokemonArray.sort((a, b) => b.avg_spawns - a.avg_spawns);
  }
  return pokemonArray.sort((a, b) => a.id - b.id);
};

export const filterPokemon = (pokemonArray, type) => pokemonArray.filter((pokemon) =>
  pokemon.type.includes(type));

const getAvgSpawns = (pokemon) => pokemon.avg_spawns;

const addSpawns = (runningTotal, avg_spawns) => runningTotal + avg_spawns;

export const computeStats = (pokemonArray) => {
  const spawnsFrequency = pokemonArray.map(getAvgSpawns);
  const spawnsTotalSum = spawnsFrequency.reduce(addSpawns, 0);
  const average = spawnsTotalSum / spawnsFrequency.length;
  return Math.round(average * 100) / 100;
}
