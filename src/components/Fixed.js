import React from "react";

const Fixed = (props) => {
    
    return (
        <div className='shadow-3' style={{position: 'fixed', top: '0', width: '100%', zIndex: '999', background: 'linear-gradient(to left, rgba(7, 27, 82, 1) 0%, rgba(0,128,128,1) 100%)'}}>
            {props.children}
        </div>
    );
}

export default Fixed;