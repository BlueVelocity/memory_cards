import { useState, useEffect, useMemo } from "react";
import Selection from "./Selection.tsx";
import Cards from "./Cards.tsx";

interface PokeData {
  name: string,
  url: string,
}

export default function Game() {
  const [tileCount, setTileCount] = useState(10);
  const [generation, setGeneration] = useState("1");
  const [pokeData, setPokeData] = useState<Array<PokeData>>([]);
  const [genData, setGenData] = useState<{ [index: string]: any } | null>();

  const getPokemonData = async () => {
    let tempGenData: { [index: string]: any } | null | undefined = genData;
    if (!genData) {
      const gen1Res = await fetch(`https://pokeapi.co/api/v2/generation/1/`);
      const gen3Res = await fetch(`https://pokeapi.co/api/v2/generation/3/`);
      const gen5Res = await fetch(`https://pokeapi.co/api/v2/generation/5/`);
      const gen1Data = await gen1Res.json();
      const gen3Data = await gen3Res.json();
      const gen5Data = await gen5Res.json();

      setGenData(() => ({ "1": gen1Data, "3": gen3Data, "5": gen5Data }));
      tempGenData = { "1": gen1Data, "3": gen3Data, "5": gen5Data };
    }

    // Randomly generate numbers to correspond with pokemon
    const randNums: Array<number> = [];
    for (let i = 0; i < 10; i++) {
      const randNum = Math.floor(Math.random() * (tempGenData![`${generation}`].pokemon_species.length - 1));
      randNums.includes(randNum) ? i-- : randNums.push(randNum);
    }

    const selectedPokemon: Array<PokeData> = [];
    const getSelectedPokemon = async () => {
      for (const num of randNums) {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${tempGenData ? tempGenData[`${generation}`].pokemon_species[num].name : "1"}/`)
        const pokemonData = await pokemon.json();
        const name = pokemonData.name.toUpperCase();

        selectedPokemon.push({ name: name, url: pokemonData.sprites.front_default })
      }

      setPokeData(selectedPokemon);
    }

    getSelectedPokemon();
  }

  useEffect(() => {
    getPokemonData();
  }, [generation])

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
