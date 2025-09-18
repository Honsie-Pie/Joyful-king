import React from 'react'

export default function HowTo({ setShowInfo }) {
  return (
    <div className="info-box">
        <h2>How to Play:</h2>
        <p>Each turn, all players will be dealt 1 (one) card, then they'll have 2 (two) choices:</p>
           <p><strong>Draw</strong> another card: If you think you can do better, you have the chance of drawing another card once per turn, or...</p>
           <p><strong>Show</strong> you put your faith in your card and hope for the best.</p>
           <p>At the end of the turn, the holder of the card that has the lowest card value gets to have a drink. Unless any of the players gets a</p>
           <p><strong>King</strong>, in which case all players must drink.</p>
           <p>Have fun!</p>
        <button onClick={() => setShowInfo(false)}>Ok</button>
    </div>
  )
}
