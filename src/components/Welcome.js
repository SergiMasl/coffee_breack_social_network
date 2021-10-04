import React, { Component } from 'react';
import InfoStart from './InfoStart.js';
import WelcomBlock from './WelcomBlock.js';


class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            status: '',
        }
    }

    handler = (status) => {
        this.setState({
            status,
        })
    }

    submitSingIn = () => {

    }

    render() {
        return ( 
            <main className='contener' >
                <InfoStart 
                    status={this.state.status}
                />
                <WelcomBlock 
                    handler={this.handler}
                />
            </main>
        );
    }
}

export default Welcome;