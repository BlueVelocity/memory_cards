export default function Button({
  text,
  name,
  styleConfig,
  selectionCondition,
  clickFunc,
}: {
  text: string;
  name: string;
  styleConfig: { textCol: string; bgCol: string; bgColSelected: string };
  selectionCondition: string;
  clickFunc: Function;
}) {
  return (
    <button
      name={name}
      className={`px-5 mx-4 my-1 rounded font-bold ${name == selectionCondition ? `${styleConfig.bgColSelected} ${styleConfig.textCol}` : styleConfig.bgCol}`}
      onClick={(e) => clickFunc(e)}
    >
      {text}
    </button>
  );
}
