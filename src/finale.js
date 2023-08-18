    export default function Finale({ handleEnd, activePlayers }){
    return (
        <div className="menu">
            <h2>This is the end</h2>
            {activePlayers.map((player) => <p key={player.index + 1}>Player {player.index + 1} drank {player.timesDrank} times!</p>)}
            <button onClick={handleEnd}>Start allover</button>
        </div>
    );
}