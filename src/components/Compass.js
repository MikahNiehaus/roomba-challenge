import React from 'react';

const Compass = (props) => {

        return (
            <div className='compassButtons'>
                <button onClick={props.north}>North</button>
                <div></div>
                <button onClick={props.west}>West</button>
                <button onClick={props.south}>South</button>
                <button onClick={props.east}>East</button>
            </div>
        )
};

export default Compass