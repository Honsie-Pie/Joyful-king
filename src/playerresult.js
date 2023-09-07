import AnimatedMug from "./animatedmug";

export default function PlayerResult(props){
    return(
        <div className="player-card">
            <p><span className="bold">P{props.player.index  + 1}</span> {props.losingPlayers.includes(props.player)
            ? " grabs a drink!"
            : "is safe"}</p>
            {props.losingPlayers.includes(props.player)
            ? <AnimatedMug />
            : <p>Phew!</p>
            }
        </div>
    );
}