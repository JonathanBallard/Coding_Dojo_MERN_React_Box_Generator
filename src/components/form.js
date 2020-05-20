import React, { useState } from 'react';
import Box from './box';






const Form = props => {
    const {color, setColor } = props.props;
    const {colorArr, setColorArr } = props.props;
    const [ boxes, setBoxes ] = useState('');
    // console.log(props.props);
    console.log('colorArr:',colorArr);
    const allBoxes = [];
    const boxArr = [];

    const submitHandler = e => {
        // Add Box Here
        //      <Box info={{color:"Green"}}></Box>
        e.preventDefault();
        allBoxes.push(color);
        function ab(ele, idx){
            return <Box key={idx} info={{color:ele}}></Box>;
        }
        console.log('allBoxes.length', allBoxes.length)
        return (
            setBoxes( 
                <div>
                    { allBoxes.map(ab) }
                </div>
            )
        )
    }

    //alternative
    // const submitHandler = e => {
    //     console.log('2colorArr:',colorArr);
    //     // Add Box Here
    //     //      <Box info={{color:"Green"}}></Box>
    //     e.preventDefault();
    //     console.log('3colorArr:',colorArr);
    //     setColorArr( {value:color, arr:(colorArr.arr || [])} );
    //     setColorArr( colorArr => {
    //         const arr = [...(colorArr.arr || []), colorArr.value];
    //     }
    //     );
    //     for(var i = 0; i < colorArr.arr.length; i++){
    //         boxArr.push(<Box key={i} info={{color:colorArr.arr[i]}}></Box>);
    //     }
    //     console.log('colorArr', colorArr[0])
    //     return (
    //         setBoxes( 
    //             <div>
    //                 { boxArr }
    //             </div>
    //         )
    //     )
    // }

    
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