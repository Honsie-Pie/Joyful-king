import HumanPlayer from "./humanplayer";
import ComputerPlayer from "./computerplayer";

export default function PlayerDash({ activePlayers, handleDraw, handleResults }){
    return(
        <div className="menu" id="player-dash">
            {activePlayers.map((player, index) => index === 0
            ? <HumanPlayer index={index + 1} card={player.card}  handleDraw={handleDraw} handleResults={handleResults}/>
            : <ComputerPlayer index={index + 1} card={player.card} handleDraw={handleDraw}/>
            )}
        </div>
    );
}