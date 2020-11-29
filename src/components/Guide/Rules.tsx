import React from "react";
import BoxContainer from "../BoxContainer";

export default function Rules() {
  return (
    <>
      <header className="App-header">
        <h1>Rules</h1>
      </header>
      <BoxContainer showBackButton={true}>
      <h1>Rule #1</h1>
        <p>
          Consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula
          eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris
          varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et
          venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend
          nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem
          ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu
          suscipit sem libero nec erat. Aliquam erat volutpat.
        </p>
        <h1>Rule #2</h1>
        <p>
          Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce
          purus morbi tortor magna condimentum vel, placerat id blandit sit amet
          tortor. Mauris sed libero. Suspendisse facilisis nulla in lacinia
          laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.
          Proin interdum maecenas massa turpis sagittis in, interdum non
          lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec
          sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt
          eu ligula.
        </p>
      </BoxContainer>
    </>
  );
}
