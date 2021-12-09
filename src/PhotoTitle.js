import React from 'react';
import styled from "styled-components";
import theme from "./theme";

const StyledPhotoTitle = styled.div`
    h4 {
    color: ${props => props.theme.white}
  }
`

const PhotoTitle = props => {
    return (
        <StyledPhotoTitle theme={theme}>
            <h4>Title: {props.photo.title}</h4>
        </StyledPhotoTitle>
    )
}

export default PhotoTitle;