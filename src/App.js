import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box';
import Form from './components/form';

function App() {
    const [color, setColor] = useState(0);
    return (
        <div className="App">
            <Form props={{color:color, setColor:setColor}}></Form>
            
        </div>
    );
}

export default App;
