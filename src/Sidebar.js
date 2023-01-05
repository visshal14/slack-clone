import React, { useState, useEffect } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { BookmarkBorder, Drafts, Inbox, Create, Apps, ExpandLess, FileCopy, PeopleAlt, ExpandMore, Add } from '@mui/icons-material';
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import db from './firebase';
import { useStateValue } from './SateProvider';



function Sidebar() {
    const [{ user }] = useStateValue()
    const [channels, setChannels] = useState([])


    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => {
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name

                }))
            )

        })
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='sidebar_info'>
                    <h2>Visshal14</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <Create />




            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & Reaction" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People & user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File Browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channel" />
            <hr />
            <SidebarOption Icon={Add} title="Add Channel" addChannelOption />

            {channels.map(channel => (
                <SidebarOption title={channel.name} key={channel.id}
                    id={channel.id} />
            ))}


        </div>
    )
}

export default Sidebar