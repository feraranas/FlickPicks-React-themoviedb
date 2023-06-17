import styled from "styled-components";

export const MainContainer = styled.div`
     display: flex;
     width: 70%;
     margin-left: 30px;
     margin-bottom: 30px;
     flex-direction: column;
     @media (max-width: 950px) {
          justify-content: center;
          width: 50%;
          flex-direction: column;
     }
     @media (max-width: 768px) {
          justify-content: center;
          width: 80%;
          flex-direction: column;
     }
`;

export const Input = styled.input.attrs({
     type: "text"
})`
     font-size: 14px;
     padding: 20px;
     border: 0.5px solid black;
     border-radius: 5px;
`;