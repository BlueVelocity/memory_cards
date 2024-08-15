interface PokeData {
  url: string,
  name: string
}

export default function Cards({ cardInfo }: { cardInfo: Array<PokeData> | null }) {

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] grid-auto-rows-min">
      {cardInfo ? cardInfo.map((card) => {
        return <div key={card.url} className="bg-red-100" >
          <img src={card.url} />
          <p>{card.name}</p>
        </div>;
      }) : null}
    </div>
  );
}
