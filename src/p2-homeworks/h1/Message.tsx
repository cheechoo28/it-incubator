import React from "react";
import a from "./Message.module.css"

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={a.message}>
            <div>
                <img src={props.avatar} className={a.avatar}/>
            </div>
            <div className={a.content}>
                <div className={a.name}>
                    {props.name}
                </div>
                <div className={a.messageTime}>
                    <div className={a.messageItem}>
                        {props.message}
                    </div>
                    <div className={a.time}>
                        {props.time}
                    </div>
                </div>
            </div>
            <div className={a.arrow}></div>
        </div>
    );
}

export default Message;
