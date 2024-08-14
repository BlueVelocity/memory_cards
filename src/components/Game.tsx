import { useState, useEffect } from "react";
import Selection from "./Selection.tsx";

export default function Game() {
  const [tileCount, setTileCount] = useState("10");
  const [tileData, setTileData] = useState();

  useEffect(() => {
    fetch("").then()
    return () => { }
  }, [tileCount])

  const handleDiffChange = (e: Event) => {
    setTileCount(Number(e.target.name));
  }

  return (
    <div className="flex-1 flex flex-col text-center">
      <Selection clickFunc={handleDiffChange} tileCount={tileCount.toString()} />
    </div>
  )
}
