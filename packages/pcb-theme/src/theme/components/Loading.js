import React from "react";
import { styled, keyframes } from "frontity";

import * as Variables from "../styles/Variables";
import * as Mixins from '../styles/Mixins';

const Loading = () => {
  return (
    <>
      <Spinner />
      <H1>Loading...</H1>
    </>
  );
};
export default Loading;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 20px solid black;
  border-top: 20px solid ${Variables.colorRed};
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  animation: ${spin} 0.7s linear infinite;
  margin: 2rem auto 0 auto;
`;

const H1 = styled.h1`
  ${Mixins.addHeadingFont(700, 7)};
  text-align: center;
  color: ${Variables.colorRed};
`
