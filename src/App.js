import  React, { useState, useEffect } from 'react';
import MainMenu from './mainemenu';
import PlayerDash from './playerdash';
import Results from './results';
import './App.css';

function App() {
  const fullDeck = [
    {
      suit: "Clubs",
      no: 1,
      rank: "Ace",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_ace.svg"
    },
    {
      suit: "Clubs",
      no: 2,
      rank: "Two",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_2.svg"
    },
    {
      suit: "Clubs",
      no: 3,
      rank: "Three",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_3.svg"
    },
    {
      suit: "Clubs",
      no: 4,
      rank: "Four",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_4.svg"
    },
    {
      suit: "Clubs",
      no: 5,
      rank: "Five",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_5.svg"
    },
    {
      suit: "Clubs",
      no: 6,
      rank: "Six",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_6.svg"
    },
    {
      suit: "Clubs",
      no: 7,
      rank: "Seven",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_7.svg"
    },
    {
      suit: "Clubs",
      no: 8,
      rank: "Eight",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_8.svg"
    },
    {
      suit: "Clubs",
      no: 9,
      rank: "Nine",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_9.svg"
    },
    {
      suit: "Clubs",
      no: 10,
      rank: "Ten",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_10.svg"
    },
    {
      suit: "Clubs",
      no: 11,
      rank: "Jack",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_jack.svg"
    },
    {
      suit: "Clubs",
      no: 12,
      rank: "Queen",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_queen.svg"
    },
    {
      suit: "Clubs",
      no: 13,
      rank: "King",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_king.svg"
    },
    {
      suit: "Hearts",
      no: 1,
      rank: "Ace",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_ace.svg"
    },
    {
      suit: "Hearts",
      no: 2,
      rank: "Two",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_2.svg"
    },
    {
      suit: "Hearts",
      no: 3,
      rank: "Three",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_3.svg"
    },
    {
      suit: "Hearts",
      no: 4,
      rank: "Four",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_4.svg"
    },
    {
      suit: "Hearts",
      no: 5,
      rank: "Five",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_5.svg"
    },
    {
      suit: "Hearts",
      no: 6,
      rank: "Six",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_6.svg"
    },
    {
      suit: "Hearts",
      no: 7,
      rank: "Seven",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_7.svg"
    },
    {
      suit: "Hearts",
      no: 8,
      rank: "Eight",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_8.svg"
    },
    {
      suit: "Hearts",
      no: 9,
      rank: "Nine",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_9.svg"
    },
    {
      suit: "Hearts",
      no: 10,
      rank: "Ten",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_10.svg"
    },
    {
      suit: "Hearts",
      no: 11,
      rank: "Jack",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_jack.svg"
    },
    {
      suit: "Hearts",
      no: 12,
      rank: "Queen",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_queen.svg"
    },
    {
      suit: "Hearts",
      no: 13,
      rank: "King",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_king.svg"
    },
    {
      suit: "Spades",
      no: 1,
      rank: "Ace",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/other/spades_ace_simple.svg"
    },
    {
      suit: "Spades",
      no: 2,
      rank: "Two",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_2.svg"
    },
    {
      suit: "Spades",
      no: 3,
      rank: "Three",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_3.svg"
    },
    {
      suit: "Spades",
      no: 4,
      rank: "Four",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_4.svg"
    },
    {
      suit: "Spades",
      no: 5,
      rank: "Five",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_5.svg"
    },
    {
      suit: "Spades",
      no: 6,
      rank: "Six",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_6.svg"
    },
    {
      suit: "Spades",
      no: 7,
      rank: "Seven",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_7.svg"
    },
    {
      suit: "Spades",
      no: 8,
      rank: "Eight",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_8.svg"
    },
    {
      suit: "Spades",
      no: 9,
      rank: "Nine",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_9.svg"
    },
    {
      suit: "Spades",
      no: 10,
      rank: "Ten",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_10.svg"
    },
    {
      suit: "Spades",
      no: 11,
      rank: "Jack",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_jack.svg"
    },
    {
      suit: "Spades",
      no: 12,
      rank: "Queen",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_queen.svg"
    },
    {
      suit: "Spades",
      no: 13,
      rank: "King",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_king.svg"
    },
    {
      suit: "Diamonds",
      no: 1,
      rank: "Ace",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_ace.svg"
    },
    {
      suit: "Diamonds",
      no: 2,
      rank: "Two",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_2.svg"
    },
    {
      suit: "Diamonds",
      no: 3,
      rank: "Three",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_3.svg"
    },
    {
      suit: "Diamonds",
      no: 4,
      rank: "Four",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_4.svg"
    },
    {
      suit: "Diamonds",
      no: 5,
      rank: "Five",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_5.svg"
    },
    {
      suit: "Diamonds",
      no: 6,
      rank: "Six",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_6.svg"
    },
    {
      suit: "Diamonds",
      no: 7,
      rank: "Seven",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_7.svg"
    },
    {
      suit: "Diamonds",
      no: 8,
      rank: "Eight",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_8.svg"
    },
    {
      suit: "Diamonds",
      no: 9,
      rank: "Nine",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_9.svg"
    },
    {
      suit: "Diamonds",
      no: 10,
      rank: "Ten",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_10.svg"
    },
    {
      suit: "Diamonds",
      no: 11,
      rank: "Jack",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_jack.svg"
    },
    {
      suit: "Diamonds",
      no: 12,
      rank: "Queen",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_queen.svg"
    },
    {
      suit: "Diamonds",
      no: 13,
      rank: "King",
      url: "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_king.svg"
    }
  ];

  const possiblePhases = [
    "main-menu", "drawing", "results", "final-results"
  ];

  const [deck, setDeck] = useState(fullDeck);
  const [numPlayers, setNumPlayers] = useState(2);
  const [activePlayers, setActivePlayers] = useState([]);
  const [phase, setPhase] = useState("main-menu");

  
  useEffect(()=>{
    const randomizedDeck = randomize(deck);
    setDeck(randomizedDeck);
  }, []);

  function handleNumPlayersChange(event){
    setNumPlayers(event.target.value);
  }

  function handleNewRound(){
    const playersArr= [...activePlayers];
    
    if (deck.length >= numPlayers) {
      for (let i = 0; i < numPlayers; i++){
        playersArr[i].switch = false;
        playersArr[i].card = deck[i];
  
        const newDeck = deck.slice(numPlayers);
  
        setActivePlayers(playersArr);
        setPhase("drawing");
        setDeck(newDeck);
      }
    } else {
      setPhase("finale");
      setDeck(randomize(fullDeck));
    }
    
  }

  function handleDraw(index){
    console.log(`player ${index} wants to draw another card`);
    if (deck.length && activePlayers[index - 1].switch === false){
      console.log("this player hasn't switched");
      const replacementCard = deck[0];
      const replacementDeck = deck.slice(1);
      const replacementPlayers = [...activePlayers];

      replacementPlayers[index - 1].switch = true;
      replacementPlayers[index - 1].card = replacementCard;
      
      setActivePlayers(replacementPlayers);
      setDeck(replacementDeck);
      console.log(replacementPlayers);
    }
  }

  function handleResults(){
    if(phase === "drawing"){
      console.log("Let's find out who the winner fraking is");
      setPhase("results");
    }
    
  }

  function handleStart(){
    const playersArr= [];

    for (let i = 0; i < numPlayers; i++){
      playersArr.push({
        index: i,
        card: deck[i],
        switch: false,
        timesDrank: 0
      });
    }

    const newDeck = deck.slice(numPlayers);

    setActivePlayers(playersArr);
    setPhase("drawing");
    setDeck(newDeck);
  }

  function randomize(arr){
    const arr2 = [...arr];
    for (let i = arr2.length - 1; i > 0; i--){

        let j = Math.floor(Math.random() * (i + 1));
        [arr2[i], arr2[j]] = [arr2[j], arr2[i]];
    }
    return arr2;
  }


  return (
    <div className="App">
      <h1>Sad King</h1>
      {phase === "main-menu"
      ? <MainMenu numPlayers={numPlayers} handleNumPlayersChange={handleNumPlayersChange} handleStart={handleStart} />
      : phase === "drawing" 
      ? <PlayerDash activePlayers={activePlayers} handleDraw={handleDraw} handleResults={handleResults}/>
      : phase === "results"
      ? <Results handleNewRound={handleNewRound}/>
      : <h1>The End</h1>
      }
      <p>{deck.map((card, index) => <span key={index}> {index}: {card.rank} of {card.suit}  ,</span>)}</p>
    </div>
  );
}

export default App;
