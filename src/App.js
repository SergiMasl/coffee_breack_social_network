import './App.css';
import React, { Component } from 'react';
import InfoStart from './components/InfoStart.js';
import WelcomBlock from './components/WelcomBlock.js';

class App extends Component {
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
            <main className='contener'>
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

export default App;