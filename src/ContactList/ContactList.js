import React from 'react';
import parseJSON from './ContactJSONParser.js'
import './ContactList.css'

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = parseJSON();
    }
    render() {
        const list = []

        this.state.forEach(element => {
            list.push(
                <div className="contactCard">
                    <h2 className="socialMedia">{element.media}</h2>
                    <p className="username"><i>{element.username}</i></p>
                    <a className="socialLink" href={element.link}>Get to know me!</a>
                </div>
            )
        });

        return (
            <div className = "container">
                <h1>Social Media</h1>
                <div className="contactContainer">
                    {list}
                </div>
            </div>
        )
    }
}

export default ContactList;