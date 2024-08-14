import Button from "./Button.tsx";

export default function Selection({ tileCount, clickFunc }: { tileCount: string, clickFunc: Function }) {
  return (
    <div className="flex-1">
      <Button text="Easy" quantity="10" clickFunc={clickFunc} tileCount={tileCount} />
      <Button text="Medium" quantity="15" clickFunc={clickFunc} tileCount={tileCount} />
      <Button text="Hard" quantity="20" clickFunc={clickFunc} tileCount={tileCount} />
    </div>
  )
}
