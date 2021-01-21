import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void  // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name ? s.inpf : s.error; // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <input value={name} onChange={setNameCallback} className={inputClass} placeholder={'User Name'}/>
            <button onClick={addUser} className={s.butt}>Add user</button>
            <span>{error}</span>
            <div className={s.total}>
                <span>{totalUsers}</span>
            </div>
        </div>
    );
}

export default Greeting;
