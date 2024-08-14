export default function Cards(cardInfo: Array<{ url: string; name: string }>) {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] grid-auto-rows-min">
      {cardInfo.map((card) => {
        return <div></div>;
      })}
    </div>
  );
}
