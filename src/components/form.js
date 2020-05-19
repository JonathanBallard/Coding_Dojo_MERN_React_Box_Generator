import React, { useState } from 'react';
import Box from './box';






const Form = props => {
    const {color, setColor } = props.props;
    const [ boxes, setBoxes ] = useState(0);
    // console.log(props.props);
    console.log('boxes:',boxes);


    const submitHandler = e => {
        // Add Box Here
        //      <Box info={{color:"Green"}}></Box>
        e.preventDefault();
        return (
            setBoxes( <Box info={{color:color}}></Box>)
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
                    <input className="form-control" name="colorInput" onChange={changeHandler}></input>
                </div>
                <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
            </form>
            {boxes}
        </div>
    )
}


export default Form;