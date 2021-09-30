import './App.css';
import React, { Component } from 'react';
import InfoStart from './constructor/InfoStart.js';
import WelcomBlock from './constructor/WelcomBlock.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            status: '',
        }
    }

    handler = (status) => {
        console.log(status)
        this.setState({
            status,
        })
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