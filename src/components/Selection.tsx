import Button from "./Button.tsx";

export default function Selection({
  tileCount,
  selectedGen,
  difficultySelectionFunc,
  generationSelectionFunc,
}: {
  tileCount: string;
  selectedGen: string;
  difficultySelectionFunc: Function;
  generationSelectionFunc: Function;
}) {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col md:flex-row">
        <Button
          text="Easy"
          name="10"
          styleConfig={{
            textCol: "text-yellow-500",
            bgCol: "bg-red-500",
            bgColSelected: "bg-red-800",
          }}
          clickFunc={difficultySelectionFunc}
          selectionCondition={tileCount}
        />
        <Button
          text="Medium"
          name="15"
          styleConfig={{
            textCol: "text-yellow-500",
            bgCol: "bg-red-500",
            bgColSelected: "bg-red-800",
          }}
          clickFunc={difficultySelectionFunc}
          selectionCondition={tileCount}
        />
        <Button
          text="Hard"
          name="20"
          styleConfig={{
            textCol: "text-yellow-500",
            bgCol: "bg-red-500",
            bgColSelected: "bg-red-800",
          }}
          clickFunc={difficultySelectionFunc}
          selectionCondition={tileCount}
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <Button
          text="Gen 1"
          name="1"
          styleConfig={{
            textCol: "text-yellow-500",
            bgCol: "bg-green-500",
            bgColSelected: "bg-green-800",
          }}
          clickFunc={generationSelectionFunc}
          selectionCondition={selectedGen}
        />
        <Button
          text="Gen 3"
          name="3"
          styleConfig={{
            textCol: "text-yellow-500",
            bgCol: "bg-green-500",
            bgColSelected: "bg-green-800",
          }}
          clickFunc={generationSelectionFunc}
          selectionCondition={selectedGen}
        />
        <Button
          text="Gen 5"
          name="5"
          styleConfig={{
            textCol: "text-yellow-500",
            bgCol: "bg-green-500",
            bgColSelected: "bg-green-800",
          }}
          clickFunc={generationSelectionFunc}
          selectionCondition={selectedGen}
        />
      </div>
    </div>
  );
}
