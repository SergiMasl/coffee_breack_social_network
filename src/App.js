import './App.css';
import React, { Component } from 'react';
import InfoStart from './constructor/InfoStart.js';
import WelcomBlock from './constructor/WelcomBlock.js';

class Sign extends Component {
    constructor() {
        super();
        this.state = {
            status: '',
        }
    }
} 

const handler = (e) => {
    if (e.target.value === 'signIn') {
        this.setStatus({
            status: 'signIn'
        })  
    } else if (e.target.value === 'signUp') {
        this.setStatus({
            status: 'signUp'
        })  
    }

}


function App() {
    return ( 
        <main className='contener'>
            <InfoStart 
                status={this.status}
            />
            <WelcomBlock 
                handler={this.handler}
            />
        </main>
    );
}

export default App;