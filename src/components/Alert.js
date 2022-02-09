import React from 'react'

export default function Alert(props) {

    const handleAltBtn = ()=>{
        props.setnullalt();
    };

    return (
       props.Alert && <div className="Alert" id ="Alert">
            <strong>{props.Alert.hed}</strong> <p>{props.Alert.msg}</p>
            <button id = "closeAlert" onClick={handleAltBtn}>close</button>
        </div>
    )
}
