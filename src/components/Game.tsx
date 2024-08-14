import { useState } from "react";
import Selection from "./Selection.tsx";

export default function Game() {
  const [tileCount, setTileCount] = useState("10");

  const handleDiffChange = (e: Event) => {
    setTileCount(Number(e.target.name));
  }

  return (
    <div className="flex-1 flex flex-col text-center">
      <Selection clickFunc={handleDiffChange} tileCount={tileCount.toString()} />
    </div>
  )
}
