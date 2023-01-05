import React from 'react'
import "./Header.css"
// import { Avatar, AccountCircleIcon } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import { useStateValue } from './SateProvider';
function Header() {

    const [{ user }] = useStateValue();



    return (
        <div className='header'>
            <div className='header_left'>
                <AccountCircleIcon
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                {/* time icon */}
                <AccessTimeIcon />
            </div>
            <div className='header_search'>
                {/* search icon */}
                <SearchIcon />
                {/* input */}
                <input placeholder="search"></input>
            </div>
            <div className='header_right'>
                <HelpIcon />
                {/* help */}
            </div>
        </div>
    )
}

export default Header