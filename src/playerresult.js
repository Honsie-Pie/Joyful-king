export default function PlayerResult(props){
    return(
        <div className="player-card">
            {props.losingPlayers.includes(props.player)
            ? <p>Player {props.player.index + 1} grabs a drink!</p>
            : <p>Player {props.player.index  + 1} is safe</p>
            }
        </div>
    );
}