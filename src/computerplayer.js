export default function ComputerPlayer(props){
    return(
        <div className="player-card">
            <p>Player {props.index}:</p>
            <h3>{props.card.rank} of {props.card.suit}</h3>
        </div>
    );
}