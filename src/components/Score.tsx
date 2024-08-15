export default function Score({ tileCount, score }: { tileCount: number, score: Array<number> }) {

  return (
    <div>
      {score.length != tileCount ? <p className="font-bold text-lg">Score: {score.length.toString()} / {tileCount.toString()}</p> :
        <p className="font-bold text-lg">WINNER WINNER CHICKEN DINNER</p>}
    </div>
  );
}
