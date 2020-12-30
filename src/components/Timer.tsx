import React, { useEffect, useState } from "react";

interface Props {
  time: number;
  timerElapsed: () => void;
}

export default function Timer({ time, timerElapsed }: Props) {
  const [counter, setCounter] = useState(time);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter === 0 && timerElapsed();
  }, [counter]);
  return <>{counter}</>;
}
