import React from 'react';

import './Contact.css';

const Contact = (props) => {
    return (
        <div className='Contact'>
            <p><img className ='avatar' src = {props.avatar} alt = {props.name}/></p>
            <div>
            <h2 className = 'name'>{props.name}</h2>
                <div className = 'status'>
                    <div className ={props.online ? 'status-online' : 'status-offline'}></div>
                    <p className = 'status-text'>{props.online ? 'Online' : 'Offline'}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;