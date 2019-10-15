import React from 'react';

import Contact from './Contact';



const users = [
    {
        name : "Peter Ross",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        online: true
        
    },
    {
        name : "Doris Webb",
        avatar: "https://randomuser.me/api/portraits/women/57.jpg",
        online: true
        
    },
    {
        name : "Ellen Garrett",
        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
        online: false
        
    },
    {
        name : "Annette Beck",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        online: true
        
    },
    {
        name : "Felix Brewer",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        online: false
        
    },
];

const ContactList = () => {
    return (
    users.map((user) => {
    return (
    <Contact name= {user.name} avatar= {user.avatar} online= {user.online} />
    )
    }
    )
    )};




export default ContactList;
 
