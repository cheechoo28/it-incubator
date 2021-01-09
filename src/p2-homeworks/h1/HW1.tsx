import React from "react";
import Message from "./Message";

type messageDataPropsType = {}
const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Artem",
    message: "npm start нажал?",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message}
                     time={messageData.time}/>
        </div>
    );
}

export default HW1;
