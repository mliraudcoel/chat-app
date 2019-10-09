import React from 'react';

import './Contact.css';

const Contact = (props) => {
    console.log(props);
    return (
        <div className='Contact'>
            <p><img className ='avatar' src = {props.avatar} /></p>
            <div>
            <p className = 'name'>{props.name}</p>
                <div className = 'status'>
                    <p className ={props.online ? 'status-online' : 'status-offline'}></p>
                    <p className = 'status-text'>{props.online ? 'Online' : 'Offline'}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;