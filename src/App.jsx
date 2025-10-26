import  { useState } from "react";
import Header from "./Component/Header";
import Play from "./Component/Play";
import Game from "./Component/Game";
import Footer from "./Component/Footer";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  const [played, setPlayed] = useState(false);

  // Define routes with new router config syntax

  return (
    <>
      <div className="container">
        <Header score={score} />
        {!played && <Play setPlayed={setPlayed} setMyChoice={setMyChoice} />}
        {played && (
          <Game setPlayed={setPlayed} myChoice={myChoice} score={score} setScore={setScore} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
