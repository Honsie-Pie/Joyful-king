export default function HumanPlayer(props){
    return(
        <div className="player-card">
            <p>Player {props.index}:</p>
            <img className="card" src={props.card.url} alt=''/>
            {/*<h3>{props.card.rank} of {props.card.suit}</h3>*/}
            <div className="player-controls">
                <button onClick={() => props.handleDraw(props.index)}>Draw</button>
                <button onClick={props.handleResults}>Show</button>
            </div>
        </div>
    );
}