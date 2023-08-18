export default function Results({ handleNewRound, losingPlayers }){
    return (
        <div className="menu">
            <h2>Results:</h2>
            {losingPlayers.map(loser => <p key={loser.index + 1} >Player {loser.index + 1} grabs a drink!</p>)}
            <button onClick={handleNewRound}>Next Round</button>
        </div>
    );
}