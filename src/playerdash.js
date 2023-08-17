import HumanPlayer from "./humanplayer";
import ComputerPlayer from "./computerplayer";

export default function PlayerDash({ activePlayers }){
    return(
        <div className="menu">
            {activePlayers.map((player, index) => index === 0
            ? <HumanPlayer index={index + 1} card={player.card} />
            : <ComputerPlayer index={index + 1} card={player.card} />
            )}
        </div>
    );
}