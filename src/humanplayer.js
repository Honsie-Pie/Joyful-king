export default function HumanPlayer(props){
    return(
        <div className="player-card">
            <p>Player {props.index}:</p>
            <h3>{props.card.rank} of {props.card.suit}</h3>
            <button>Draw another</button>
            <button>Fold</button>
        </div>
    );
}