import styled from 'styled-components';

export const Container = styled.div`
background-color: #f7f7f7;
color: black;
height: 100vh;
  padding: 0px 15px 0px 15px;
  margin: 0px auto 0px auto;
  box-sizing: border-box;
  &:before,
  &:after {
        content:" ";
      display: table;
  }
  &:after {
      clear: both;
  }

`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  &:before,
  &:after {
        content:" ";
      display: table;
  }
  &:after {
      clear: both;
  }
`;

  function getWidthGrid(value) {
    if(!value) return;
    let width = value / 12 * 100;
    return `width: ${width}%`
  }

export const Col = styled.div`
  width: 100%;
  float: left;
  padding: .50rem;
  min-height: 1px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    ${({ mb }) => mb && getWidthGrid(mb)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tb }) => tb && getWidthGrid(tb)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ dt }) => dt && getWidthGrid(dt)}
  }
  
`;