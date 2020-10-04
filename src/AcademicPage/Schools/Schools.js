import React from 'react'
import './Schools.css'
import ubclogo from './graphics/ubc.png'
import kanisiuslogo from './graphics/kanisius.png'
import ubcBackground from './graphics/ubcbackgroundedited.jpg'
import kanisiusbackground from './graphics/kanisiusbackgroundedited.jpg'

const School = (props) => {
    const {schoolLogo, schoolName, schoolDescription, schoolBackground} = props;

    return (
        <div className="schoolContainer" 
            style={{backgroundImage: `url(${schoolBackground})`}}>
            <div className='schoolImage'>
                <img src={schoolLogo} alt="" />
            </div>
            <div className='schoolText'>
                <h3>{schoolName}</h3>
                <p>{schoolDescription}</p>
            </div>
        </div>
    )
}

class Schools extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ubctext: "Hell is other people meow meow, yet making sure that fluff gets into the owner's eyes. Chew iPad power cord headbutt owner's knee or hopped up on catnip. Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat give attitude meow stare at wall turn and meow stare at wall some more meow again continue staring .",
            kanisiustext: "Leave fur on owners clothes has closed eyes but still sees you rub whiskers on bare skin act innocent pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now, trip on catnip human give me attention meow, or licks paws."
        }
    }

    render() {
        return (
            <div className="schoolsMainContainer">
                <h1>Schools</h1>
                <div className="topbreaker"></div>
                <School schoolName="University of British Columbia"
                    schoolDescription={this.state.ubctext}
                    schoolLogo={ubclogo}
                    schoolBackground={ubcBackground} />
                <School schoolName="Kolese Kanisius" 
                    schoolDescription= {this.state.kanisiustext}
                    schoolLogo = {kanisiuslogo}
                    schoolBackground={kanisiusbackground} />
            </div>

        )
    }
}

export default Schools