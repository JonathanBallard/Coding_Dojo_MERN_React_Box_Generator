import React, { useState } from 'react';
import Box from './box';






const Form = props => {
    const {color, setColor } = props.props;
    const {colorArr, setColorArr } = props.props;
    const [ boxes, setBoxes ] = useState('');
    const { allB, setAllB } = props.props;


    const submitHandler = e => {
        // Add Box Here
        //      <Box info={{color:"Green"}}></Box>
        e.preventDefault();
        function ab(ele, idx){
            return <Box key={idx} info={{color:ele}}></Box>;
        }
        if(allB.c1){
            console.log('allB.c1a');
            setAllB(allB.colors.push(allB.c1));
            setAllB({...allB,c1:color});
        }
        else{
            console.log('else1');
            setAllB(allB.colors.push(color));
        }
        if(allB.colors){
            console.log('allB.colors')
            setAllB({...allB,c1:''})
        }

        console.log('allB.colors.length', allB.colors.length)
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
                    <input className="form-control" name="colorInput" onChange={changeHandler}></input>
                </div>
                <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
            </form>
            {boxes}
        </div>
    )
}


export default Form;