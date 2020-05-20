import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box';
import Form from './components/form';

function App() {
    const [color, setColor] = useState(0);
    const [colorArr, setColorArr] = useState(
        {
            arr:[''],
            value: ''
        }
        )
    console.log('AppcolorArr', colorArr);
    return (
        <div className="App">
            <Form props={{color:color, setColor:setColor, colorArr:colorArr, setColorArr:setColorArr}}></Form>
            
        </div>
    );
}

export default App;
