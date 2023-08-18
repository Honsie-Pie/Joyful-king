import HumanPlayer from "./humanplayer";
import ComputerPlayer from "./computerplayer";

export default function PlayerDash({ activePlayers, handleDraw, handleResults }){
    return(
        <div className="menu player-dash">
            {activePlayers.map((player, index) => index === 0
            ? <HumanPlayer key={index+1} index={index + 1} card={player.card}  handleDraw={handleDraw} handleResults={handleResults}/>
            : <ComputerPlayer key={index+1} index={index + 1} card={player.card} handleDraw={handleDraw}/>
            )}
        </div>
    );
}