export default function MainMenu(){
    return (
    <div className="menu">
        <label for="player-no">No. of players: <input id="player-no" type="number" min="2" max="4"/></label>
        <button id="start">Start!</button>
    </div>
    );
    
}