import styled from 'styled-components';

 export const Container = styled.div`
  width: 100;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  h1 {
    text-align: center;
    padding: 10px;
  }

  span {
    align-items: center;
    font-size: 20px;
    padding-right: 5px
  }

  button {
    padding: 10px;
    border: 0px;
    border-radius: 10px;
    text-align: center;
    background-color: #D2D2D2;
  }

  ul li {
    border-bottom: 1px solid #ddd;
    margin-top: 30px;
    list-style: none;
    padding: 10px;
  }

  ul li a {
    text-decoration: none;
    color: #ddd;
  }
  div {
    padding: 45px;
    border: 2px solid #000;
    border-radius: 10px;
  }

`;

