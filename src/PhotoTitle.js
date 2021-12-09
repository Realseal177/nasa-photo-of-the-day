import React from 'react';

const PhotoTitle = props => {
    return (
        <div>
            <h4>Title: {props.photo.title}</h4>
        </div>
    )
}

export default PhotoTitle;