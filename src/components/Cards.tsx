import pokeball from '../assets/pokeball.png';
import { PokeData } from './Game.tsx';

export default function Cards({ cardInfo, tileCount, loading, clickCard }: { cardInfo: Array<PokeData>, tileCount: number, loading: boolean, clickCard: Function }) {

  return (
    loading ? <img src={pokeball} className="mx-auto max-w-12 mt-20 animate-bounce"></img> :
      <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] grid-auto-rows-min">
        {cardInfo ? cardInfo.map((card) => {
          return <div key={card.id} id={card.id.toString()} className="items-center p-2 m-2 flex flex-col justify-center rounded-xl hover:cursor-pointer" onClick={(e) => clickCard(e)}>
            <img src={card.url} className="p-2 mb-2 outline outline-1 rounded-full bg-gradient-to-b from-red-200 via-gray-300 to-white from-45% via-50% to-55%" />
            {tileCount <= 15 && <p className="max-w-fit text-xs font-bold px-3 bg-red-100 rounded-lg">{card.name}</p>}
          </div>;
        }) : null}
      </div>
  );
}
