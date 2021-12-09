import React from 'react';

const Photo = props => {
    return (
        <div>
            <img 
            alt='Comet Hale-Bopp Over Val Parola Pass'
            src={props.photo.hdurl}
            />
        </div>
    )
}

export default Photo;