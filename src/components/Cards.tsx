interface PokeData {
  url: string,
  name: string
}

export default function Cards({ cardInfo, tileCount }: { cardInfo: Array<PokeData>, tileCount: number }) {

  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] grid-auto-rows-min">
      {cardInfo ? cardInfo.map((card) => {
        return <div key={card.url} className="p-4 m-2 flex flex-col justify-center bg-brown-100 rounded-xl" >
          <img src={card.url} className="bg-red-100 mb-2 rounded-lg" />
          {tileCount <= 15 && <p className="max-w-fit text-xs font-bold px-3 bg-red-100 rounded-lg">{card.name}</p>}
        </div>;
      }) : null}
    </div>
  );
}
