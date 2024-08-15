import { useState, useEffect, useMemo } from "react";
import Selection from "./Selection.tsx";
import Cards from "./Cards.tsx";

interface PokeData {
  url: string,
  name: string,
}

export default function Game() {
  const [tileCount, setTileCount] = useState(10);
  const [generation, setGeneration] = useState("1");
  const [pokeData, setPokeData] = useState<PokeData[] | null>(null);
  const [tileData, setTileData] = useState();

  // Fetch pokemon species data
  const getPokemonFromGen = async (genId: string) => {
    const genResponse = await fetch(
      `https://pokeapi.co/api/v2/generation/${genId}/`,
    )
    const genData = await genResponse.json();

    const pokemonData = genData.pokemon_species.map(async ({ url, name }: { url: string, name: string }) => {
      const speciesResponse = await fetch(url);
      const speciesData = await speciesResponse.json();

      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${speciesData.id.toString()}/`);
      const pokemonData = await pokemonResponse.json();
      console.log({ url: pokemonData.sprites.front_default, name: name })

      return { url: pokemonData.sprites.front_default, name: name }
    })

    return pokemonData;
  };

  useEffect(() => {
    const getPokemon = async () => {
      const pokemon = await getPokemonFromGen(generation);

      const randSpecies: Array<PokeData> = [];
      if (pokemon) {
        for (let i = 0; i < tileCount; i++) {
          const randNum = Math.floor(Math.random() * pokemon.length - 1);

          !randSpecies.includes(pokemon[randNum])
            ? randSpecies.push(pokemon[randNum])
            : i--;
        }
      }

      setPokeData(randSpecies);
    };

    getPokemon();
  }, [tileCount, generation]);

  const handleDifficultyChange = (e: any) => {
    setTileCount(Number(e.target.name));
  };

  const handleGenerationChange = (e: any) => {
    setGeneration(e.target.name);
  };

  return (
    <div className="flex-1 flex flex-col text-center">
      <Selection
        tileCount={tileCount.toString()}
        selectedGen={generation}
        difficultySelectionFunc={handleDifficultyChange}
        generationSelectionFunc={handleGenerationChange}
      />
      <Cards cardInfo={pokeData} />
    </div>
  );
}
