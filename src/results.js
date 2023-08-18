import PlayerResult from "./playerresult";

export default function Results({ handleNewRound, losingPlayers, activePlayers }){
    return (
        <div className="menu">
            <h2>Results:</h2>
            <div className="player-dash">
                {activePlayers.map((player) => <PlayerResult key={player.index + 1} player={player} losingPlayers={losingPlayers}/>)}
            </div>
            <button onClick={handleNewRound}>Next Round</button>
        </div>
    );
}