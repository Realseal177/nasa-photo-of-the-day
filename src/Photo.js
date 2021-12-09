import React from "react";
import styled from "styled-components";
import theme from "./theme";

const StyledPhoto = styled.div`
    display: flex;
    justify-content: center;
  img {
    border: 5px solid #fca311;
    border-radius: 20px;
    max-width: 80%;
  }
`;

const Photo = (props) => {
  return (
    <StyledPhoto theme={theme} className="photo">
      <img alt="Comet Hale-Bopp Over Val Parola Pass" src={props.photo.hdurl} />
    </StyledPhoto>
  );
};

export default Photo;
