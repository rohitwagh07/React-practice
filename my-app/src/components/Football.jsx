
//onclick event hander function concept

import React from "react"

function Football() {

    const Shoot = () => {
        alert("Great shoot")
    }
    return (
        <>
            <button onClick={Shoot}>Take a shoot</button>
        </>
    )
}

export default Football;
