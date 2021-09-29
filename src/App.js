import './App.css';
import React from 'react';
import InfoStart from './constructor/InfoStart.js';
import StartPage from './constructor/StartPage.js';

function App() {
    return ( <main className='contener'>
            <InfoStart />
            <StartPage />
        </main>
    );
}

export default App;