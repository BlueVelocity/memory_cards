export default function Button({ text, quantity, tileCount, clickFunc }: { text: string, quantity: string, tileCount: string, clickFunc: Function }) {
  return (
    <button name={quantity} className={`px-5 mx-4 rounded font-bold ${quantity == tileCount ? "bg-red-800 text-yellow-400" : "bg-[#f04037]"}`} onClick={(e) => clickFunc(e)}>
      {text}
    </button>
  )
}
