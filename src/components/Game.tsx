import { useState, useEffect, useMemo } from "react";
import Selection from "./Selection.tsx";
import Cards from "./Cards.tsx";

interface PokeData {
  name: string,
  url: string,
}

const genIdRanges: { [index: string]: Array<number> } = {
  "1": [1, 151],
  "3": [252, 386],
  "5": [494, 649],
}

export default function Game() {
  const [tileCount, setTileCount] = useState(10);
  const [generation, setGeneration] = useState("1");
  const [pokeData, setPokeData] = useState<Array<PokeData>>([]);

  const getPokemonData = async () => {
    // Randomly generate numbers to correspond with pokemon
    const randNums: Array<number> = [];
    for (let i = 0; i < tileCount; i++) {
      const randNum = Math.floor(Math.random() * (genIdRanges[generation][1] - genIdRanges[generation][0] + 1)) + genIdRanges[generation][0];
      randNums.includes(randNum) ? i-- : randNums.push(randNum);
    }

    const getSelectedPokemon = async () => {
      const selectedPokemon: Array<PokeData> = [];
      for (const num of randNums) {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        const pokemonData = await pokemonResponse.json();
        const name = pokemonData.name.toUpperCase();

        selectedPokemon.push({ name: name, url: pokemonData.sprites.front_default })
      }

      setPokeData(selectedPokemon);
    }

    getSelectedPokemon();
  }

  useEffect(() => {
    getPokemonData();
  }, [tileCount, generation])

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
