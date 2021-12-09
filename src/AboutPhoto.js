import React from 'react';

const AboutPhoto = props => {
    return (
        <div>
            <h5>{props.photo.explanation}</h5>
            <p>Date: {props.photo.date}</p>
            <p>Copyright: {props.photo.copyright}</p>
        </div>
    )
}

export default AboutPhoto;