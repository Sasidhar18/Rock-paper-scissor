import React, { useState } from "react";
import Game from "./Components/Game";
import Play from "./Components/Play";

const App = () => {
  const [choice, setChoice] = useState("");
  const [result, showResult] = useState(false);

  console.log(result)

  return (
    <div>
      {!result && <Play setChoice={setChoice} showResult={showResult} />}
      {result && <Game choice={choice} showResult={showResult} />}
    </div>
  );
};

export default App;
