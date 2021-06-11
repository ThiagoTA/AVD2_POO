import styled from 'styled-components';

export const Container = styled.div`

  background: #DDD;
  border-radius: 5px;
  border: 2px solid #232129;
  padding: 16px;
  width: 40%;
  color: #000;
  height: 30px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    color: #000;
  }

`;
