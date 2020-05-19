import React, { useState } from 'react';

const Box = props => {
    console.log(props)
    return (
        <div className=" m-5 box d-inline-block" style={{backgroundColor:props.info.color, width:"200px", height:"200px"}}></div>
    )
}

export default Box;