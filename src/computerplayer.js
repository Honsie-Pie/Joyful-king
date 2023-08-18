import React, { useEffect } from "react";

export default function ComputerPlayer(props){

    useEffect(() => {
        if (props.card.no < 8){
            props.handleDraw(props.index)
        }
    }, []);

    return(
        <div className="player-card">
            <p>Player {props.index}:</p>
            <h3>{props.card.rank} of {props.card.suit}</h3>
        </div>
    );
}