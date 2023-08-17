export default function Results({ handleNewRound }){
    return (
        <div className="menu">
            <h2>Results:</h2>
            <button onClick={handleNewRound}>Next Round</button>
        </div>
    );
}