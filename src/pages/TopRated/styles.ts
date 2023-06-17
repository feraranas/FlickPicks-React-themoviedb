import styled from "styled-components";

export const App = styled.div`
     box-sizing: border-box;
`;

export const BodyWrapper = styled.div`
     background-color: #f3f3f3;
     float: left;
     width: 100%;
     padding: 0;
     margin: auto;
     overflow: hidden;
     padding-left: 15px;
`;

export const Header = styled.div`
     display: flex;
     justify-content: space-between;
     width: 100%;
     @media (max-width: 768px) {
          flex-direction: column;
     }
`;

export const ShowsTitle = styled.div`
     flex-grow: 1;
     text-align: left;
     font-size: 30px;
     color: #333;
     position: relative;
     font-weight: 600;
     margin-top: 20px;
     margin-bottom: 20px;
     text-align: left;
     margin-left: 30px;
     text-transform: uppercase;
     @media (max-width: 768px) {
          text-align: center;
          margin-right: 50px;
     }
`;

export const Botones = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 30px;
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: -5px;
  }
  @media (max-width: 550px) {
     text-align: center;
     align-items: center;
     justify-content: center;
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

export const SortByName = styled.button`
     background-color: #5cb85c;
     height: 50px;
     color: #fff;
     padding: 8px;
     font-size: 15px;
     font-weight: 500;
     line-height: 13px;
     margin: 0 0 5px 0;
     display: inline;
     transition: all 0.3s;
     border-radius: 5px;
     margin-right: 5px;
     border: 0.8px solid black;
`;

export const SortByCalification = styled.button`
     background-color: #5cb85c;
     height: 50px;
     color: #fff;
     padding: 8px;
     font-size: 15px;
     font-weight: 500;
     line-height: 13px;
     margin: 0 0 5px 0;
     display: inline;
     transition: all 0.3s;
     border-radius: 5px;
     margin-right: 5px;
     border: 0.8px solid black;
`;

export const Movies = styled.div`
     display: flex;
     justify-content: center;
     width: 100%;
`;

export const MovieSlider = styled.div`
     flex-grow: 1;
     text-align: center;
     margin-left: 30px;
     @media (max-width: 560px) {
          margin-left: 100px;
     }
     @media (max-width: 420px) {
          margin-left: 60px;
     }
     @media (max-width: 350px) {
          margin-left: 30px;
     }
`;