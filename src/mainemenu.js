export default function MainMenu({ numPlayers, handleNumPlayersChange, handleStart }){
    return (
    <div className="menu">
        <label htmlFor="player-no">No. of players: <input id="player-no" type="number" value={numPlayers} onChange={handleNumPlayersChange} min="2" max="4"/></label>
        <button id="start" onClick={handleStart}>Start!</button>
    </div>
    );
    
}