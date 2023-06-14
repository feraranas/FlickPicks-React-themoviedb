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
     }
`;

export const DivTitulo = styled.div`
     position: relative;
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
`;

export const Titulo = styled.div`
     font-size: 30px;
     color: #333;
     position: relative;
     font-weight: 600;
     margin-top: 20px;
     margin-bottom: 20px;
     text-align: left;
     margin-left: 30px;
     text-transform: uppercase;
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
  }
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
`;

export const Movies = styled.div`
     
`;

export const SliderMovies = styled.div`
     
`;