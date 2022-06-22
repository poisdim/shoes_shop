import React from 'react';

export const ColorBox = (props) => {
    return (
        <div className="colors">
            {
                props.colors.map((color, index) => (
                    <button key={index} style={{background: color}}></button>
                ))
            }
        </div>
    );
};