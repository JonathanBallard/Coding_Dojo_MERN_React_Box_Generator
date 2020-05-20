import React, { useState } from 'react';
import Box from './box';






const Form = props => {
    const {color, setColor } = props.props;
    const [ boxes, setBoxes ] = useState('');
    const { allB, setAllB } = props.props;


    const submitHandler = e => {
        // Add Box Here
        //      <Box info={{color:"Green"}}></Box>
        e.preventDefault();

        // validate color
        if(color == ''){
            return alert('no color given');
        }

        function ab(ele, idx){
            return <Box key={idx} info={{color:ele}}></Box>;
        }
        if(allB.c1){
            setAllB(allB.colors.push(allB.c1));
            setAllB({...allB,c1:color});
        }
        else{
            setAllB(allB.colors.push(color));
        }
        if(allB.colors){
            setAllB({...allB,c1:''});
        }

        // Delete text from submission box here
        setColor('');

        return (

            setBoxes( 
                <div>
                    { allB.colors.map(ab) }
                </div>
            )
        )
    }


    
    const changeHandler = e => {
        // Capture Color Here
        setColor(e.target.value);
    }




    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="colorInput">Color:</label>
                    <input className="form-control" name="colorInput" onChange={changeHandler} value={color}></input>
                </div>
                <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
            </form>
            {boxes}
        </div>
    )
}


export default Form;