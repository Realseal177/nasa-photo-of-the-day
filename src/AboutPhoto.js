import React from "react";
import styled from "styled-components";
import theme from "./theme";

const StyledAboutPhoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  h5 {
    display: flex;
    justify-content: center;
    width: 70%;
    margin: auto;
    padding: 2%;
    color: ${(props) => props.theme.white};
  }
  p {
    color: ${(props) => props.theme.tertiaryColor};
  }
`;

const AboutPhoto = (props) => {
  return (
    <StyledAboutPhoto theme={theme}>
      <h5>{props.photo.explanation}</h5>
      <p>Date: {props.photo.date}</p>
      <p>Copyright: {props.photo.copyright}</p>
    </StyledAboutPhoto>
  );
};

export default AboutPhoto;
