import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};// need to fix

    return (
        <div>
            <ul className={s.ul}>
                <li key={props.affair._id}>{props.affair.name}</li>
                <button onClick={deleteCallback}>X</button>
            </ul>


        </div>
    );
}

export default Affair;
