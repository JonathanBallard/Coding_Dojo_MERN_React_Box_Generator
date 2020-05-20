import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box';
import Form from './components/form';

function App() {
    const [color, setColor] = useState('');
    const [allB, setAllB] = useState({
        colors:[],
        c1:'',
    });
    const [colorArr, setColorArr] = useState(
        {
            colors:[''],
            c1: ''
        }
        )
    // console.log('AppcolorArr', colorArr);
    return (
        <div className="App">
            <Form props={{color:color, setColor:setColor, colorArr:colorArr, setColorArr:setColorArr, allB:allB, setAllB:setAllB}}></Form>
            
        </div>
    );
}

export default App;
