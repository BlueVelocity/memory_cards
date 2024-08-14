import { useState, useEffect, useMemo } from "react";
import Selection from "./Selection.tsx";
import Cards from "./Cards.tsx";

export default function Game() {
  const [tileCount, setTileCount] = useState(10);
  const [generation, setGeneration] = useState("1");
  const [tileData, setTileData] = useState();

  // Fetch pokemon species data
  const getPokemonFromGen = async (genId: string) => {
    const pokemonSpecies: Array<Object> = await fetch(
      `https://pokeapi.co/api/v2/generation/${genId}/`,
    )
      .then((data) => data.json())
      .then((data) => data.pokemon_species)
      .catch((err) => console.error(err));
    return pokemonSpecies;
  };

  const pokemonData = useMemo(() => {
    const getPokemon = async (): Promise<Object[] | null> => {
      const pokemonSpecies = await getPokemonFromGen(generation);

      const randSpecies: Object[] = [];
      if (pokemonSpecies) {
        for (let i = 0; i < tileCount; i++) {
          const randNum = Math.floor(Math.random() * pokemonSpecies.length - 1);

          !randSpecies.includes(pokemonSpecies[randNum])
            ? randSpecies.push(pokemonSpecies[randNum])
            : i--;
        }
      }

      return randSpecies;
    };

    return getPokemon();
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
      <Cards cardInfo={pokemonData} />
    </div>
  );
}
