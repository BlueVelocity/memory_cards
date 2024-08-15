interface PokeData {
  url: string,
  name: string
}

export default function Cards({ cardInfo }: { cardInfo: Array<PokeData> }) {

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] grid-auto-rows-min">
      {cardInfo ? cardInfo.map((card) => {
        return <div key={card.url} className="p-4 m-2 flex flex-col justify-center bg-red-100 rounded-xl" >
          <img src={card.url} />
          <p className="text-sm">{card.name}</p>
        </div>;
      }) : null}
    </div>
  );
}
