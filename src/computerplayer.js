import React, { useEffect } from "react";

export default function ComputerPlayer(props){
    const unknownCard = "https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/blue2.svg";
    useEffect(() => {
        if (props.card.no < 8){
            props.handleDraw(props.index)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="player-card">
            <p>Player {props.index}:</p>
            <img className="card" src={unknownCard} alt=''/>
            {/*<h3>{props.card.rank} of {props.card.suit}</h3>*/}
        </div>
    );
}