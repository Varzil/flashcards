import React, { useEffect, useState } from 'react';
import "./App.css";
const data = require('./data.json');
var list=[];
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
        <h3 >{word}</h3>
      </div>
      <div className="back">
        <h3>{meaning}</h3>
      </div>
    </div>
  );
};



const App = () => {
  const [myWord,setMyWord]=useState(generateFlashCard())
  const [click,setClick]=useState(1)
  const [backClick,setBackClick]=useState(false)
    useEffect(()=>{
      if(click<=0){
        setClick(1);
      }
      else{
        if(backClick){
          // if back button is clicked toh use list
          setMyWord(list[click-1]);
          setBackClick(false)
        }
        else{
          // if next button is clicked toh check if length ni andar ch toh 
          // use that, if not toh pachi new random word
          if(click>=list.length+1){
            var demo=generateFlashCard()
            setMyWord(demo);
            list.push(demo);
          }
          else{
            setMyWord(list[click-1]);
          }
        }
      }
      // console.log(list)
      // console.log(click)
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
        <button onClick={() => {
          setClick((c) => c - 1)
          setBackClick(true)
        }}>Previous</button>
        <button onClick={() => setClick((c) => c + 1)}>Next</button>
    </div>
    </>
  );
};

export default App;