import React, { useState } from 'react';

const Box = props => {

    // size not implemented
    if(props.info.size){
        return (
            <div className=" m-5 box d-inline-block" style={{backgroundColor:props.info.color, width:props.info.size, height:props.info.size}}></div>
        )
    }
    return (
        <div className=" m-5 box d-inline-block" style={{backgroundColor:props.info.color, width:"200px", height:"200px"}}></div>
    )
}

export default Box;