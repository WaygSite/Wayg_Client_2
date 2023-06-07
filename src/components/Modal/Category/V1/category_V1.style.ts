import styled from "styled-components";

export const Bg = styled.div`
  position: fixed;
  bottom: 0;

  opacity: 0.7;
  background-color: #d3d3d3;

  width: 100vw;
  height: 100vh;

  cursor: pointer;
`;

export const CategoryV1 = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  bottom: 15%;

  background-color: white;
  box-shadow: 5px 5px 20px lightgray;

  width: 65vw;
  height: 70vh;

  border-radius: 20px;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15vw;
  height: 15vh;

  font-size: 32px;
  font-weight: 600;
`;

export const Choice = styled.div`
  background-color: red;
`;

export const Type = styled.p``;
