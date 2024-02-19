import React, { useEffect, useState } from 'react';
import "./App.css";
const data = require('./data.json');

function generateFlashCard(){
  return data[Math.floor(Math.random() * data.length)];
}

const Flashcard = ({ word, meaning }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
    className={`container card ${isFlipped ? 'flip' : ''}`}
    
    onClick={() => setIsFlipped(!isFlipped)}
  >
      <div className="front">
        <h3 style={{alignItems:'center'}}>{word}</h3>
      </div>
      <div className="back">
        <h3>{meaning}</h3>
      </div>
    </div>
  );
};



const App = () => {
  const [myWord,setMyWord]=useState(generateFlashCard())
  const [click,setClick]=useState(0)
    useEffect(()=>{
      setMyWord(generateFlashCard());
    },[click])
  
  return (
    <>
    <div className="container">
      <div className='topic'>
      <h1>Flashcards</h1>
      </div>
        <Flashcard word={myWord.Word} meaning={myWord.Meaning} />
      </div>
      <div className="container2">
        <button onClick={() => setClick((c) => c - 1)}>Previous</button>
        <button onClick={() => setClick((c) => c + 1)}>Next</button>
    </div>
    </>
  );
};

export default App;