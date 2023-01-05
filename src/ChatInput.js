import React, { useState } from 'react'
import "./ChatInput.css"
import { Button } from "@mui/material"
import { useStateValue } from './SateProvider'
import db from './firebase'
import firebase from 'firebase/compat/app';


function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState("")
    // console.log(channelId)
    const [{ user }] = useStateValue()
    const sendMessage = e => {
        e.preventDefault();
        if (channelId) {
            db.collection("rooms").doc(channelId).collection("messages").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
        }
        setInput("")
        document.getElementById("inputChat").focus()
    }


    return (
        <div className='chatInput'>
            <form>
                <input id="inputChat" value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}></input>
                <Button style={{ position: "fixed", bottom: "30px", padding: "20px", right: "0", display: "inline-flex" }} type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput