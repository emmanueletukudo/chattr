import React, {useState, useEffect} from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({location})=>{
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const API = 'localhost:5000';
    
    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(API);

        setName(name);
        setRoom(room);

        socket.emit("join", {name, room});
    }, [API, location.search])
   
    return(
        <div>
            <h1>Chat</h1>
        </div>
    )
}

export default Chat;