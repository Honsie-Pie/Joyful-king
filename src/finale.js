    export default function Finale({ handleEnd, activePlayers }){
    return (
        <div className="menu">
            <h2>This is the end</h2>
            <div className="final-tally">
                {activePlayers.map((player) => <p key={player.index + 1}><span className="bold">Player {player.index + 1}</span> drank {player.timesDrank} times!</p>)}
            </div>
            <button onClick={handleEnd}>Start allover</button>
        </div>
    );
}