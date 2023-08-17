import  React, { useState, useEffect } from 'react';
import MainMenu from './mainemenu';
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

  const [deck, setDeck] = useState(fullDeck);

  

  useEffect(()=>{
    const randomizedDeck = randomize(deck);
    setDeck(randomizedDeck);
  }, []);

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
      <MainMenu />
      <p>{deck.map((card, index) => <span key={index}> {index}: {card.rank} of {card.suit}  ,</span>)}</p>
    </div>
  );
}

export default App;
