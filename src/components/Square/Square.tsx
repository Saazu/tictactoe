import React, { useEffect, useState } from "react";
import "./square.css";

type SquareProps = {
  value: string | null;
  setValue: (row: number, column: number) => void;
  row: number;
  column: number;
  disable: boolean;
  textSize: string;
};

function Square({
  value,
  setValue,
  row,
  column,
  disable,
  textSize,
}: SquareProps) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (disable) {
      setClicked(true);
    }
  }, [disable]);

  function handleClick() {
    if (!clicked) {
      setClicked(true);
      setValue(row, column);
    }
  }

  return (
    <button className="square" onClick={handleClick}>
      <p style={{ fontSize: textSize, fontWeight: 700 }}>{value}</p>
    </button>
  );
}

export default Square;
