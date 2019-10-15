import React from 'react';

import './Contact.css';


class Contact extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        online : props.online
    }
    }
    render() {
        return(
            <div className='Contact'>
            <p><img className ='avatar' src = {this.props.avatar} alt = {this.props.name}/></p>
            <div>
            <h2 className = 'name'>{this.props.name}</h2>
                <div className = 'status'>
                    <div onClick = {changeStatus => {
                        let offline = !this.state.online;
                        this.setState({online : offline});
                    }}
                        className = {this.state.online? 'status-online' : 'status-offline'}></div>
                        <p className = 'status-text'>{this.state.online ? 'Online' : 'Offline'}</p>
                </div>
            </div>
        </div>
        );
    }
}




// const Contact = (props) => {
//     return (
//         <div className='Contact'>
//             <p><img className ='avatar' src = {props.avatar} alt = {props.name}/></p>
//             <div>
//             <h2 className = 'name'>{props.name}</h2>
//                 <div className = 'status'>
//                     <div className ={props.online ? 'status-online' : 'status-offline'}></div>
//                     <p className = 'status-text'>{props.online ? 'Online' : 'Offline'}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }





export default Contact;