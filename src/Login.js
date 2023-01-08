import React from 'react'
import "./Login.css"
import { Button } from "@mui/material"
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
function Login() {
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        // e.preventDefault();
        auth
            .signInWithPopup(provider)
            .then((result) => {
                // console.log(result);

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch((error) => {
                alert(error.message);
            })
    }


    return (
        <div className='login'>
            <div className='login_container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/440px-Slack_Technologies_Logo.svg.png" alt="" />
                <h1>Sign In</h1>

                <Button onClick={signIn}>Sign In With Google</Button>

            </div>
        </div>
    )
}

export default Login