import styled from "styled-components";

export const HomeWrapper = styled.div`
     display: inline;
     background-color: #f3f3f3;
     float: left;
     width: 100%;
     padding: 0;
     margin: auto;
     margin-bottom: 10px;
     overflow: hidden;
     position: relative;
     padding-left: 15px;
`;

export const ShowDetails = styled.div`
     display: grid;
     margin-top: 20px;
     margin-bottom: 10px;
     grid-template-columns: 1fr 3fr;
     @media (max-width: 814px) {
          grid-template-rows: 1fr 1fr;
     }
`;

export const DescriptionData = styled.div`
     display: grid;
     grid-template-rows: 0fr 0fr 0fr 0fr;
     align-items: center;
`;

export const DescriptionDataTitle = styled.div`
     grid-row: auto;
     text-transform: capitalize;
     font-size: 40px;
     margin-top: 10px;
     margin-bottom: 10px;
`;

export const DescriptionDataNumbers = styled.div`
     grid-row: auto;
     display: grid;
     grid-template-columns: 0fr 0fr 0fr 0fr;
     margin-top: 10px;
     margin-bottom: 10px;
`;

export const Blocke = styled.div`
     display: flex;
     padding: 0px 20px 0px 20px;
`;


export const DescriptionDescription = styled.div`
     margin-top: 10px;
     margin-bottom: 10px;
     font-size: 13px;
`;

export const DescriptionDataGenres = styled.div`
     display: grid;
     grid-row: auto;
     margin-top: 10px;
     margin-bottom: 10px;
`;

export const DescriptionDataFavorite = styled.div`
     grid-row: auto;
`;

export const ShowRow = styled.div`
     display: flex;
     @media (min-width: 768px) {
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
     }
`;


export const ShowBox = styled.div`
  height: auto;
  float: left;
  overflow: hidden;
  display: block;
  margin-right: 20px;
  position: relative;
  box-shadow: 4px 4px 5px rgb(0 0 0 / 22%);
  border-radius: 7px;
  scroll-behavior: smooth;
  min-width: 280px;
  max-width: 280px;
  max-height: 400px;
`;

export const PosterImage = styled.img`
  transition: 0.9s;
  -webkit-transition: opacity 1s, -webkit-transform 1s;
  transition: opacity 1s, transform 1s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  min-width: 100%;
  height: 400px;
  position: relative;
  margin-left: 0;
  transform: scale(1);
  transition: 0.9s;
  &:hover {
    transform: scale(1.2);
    opacity: 0.4;
  }
`;

export const ShowsSlider = styled.div`
     overflow: hidden;
     height: 460px;
     margin: 0;
     padding: 0;
     line-height: 1.4;
     position: relative;
     min-height: 0;
     border: 0;
     font-size: 100%;
     font: inherit;
     vertical-align: baseline;
     margin-bottom: 50px;
`;

export const ShowsTitle = styled.div`
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

export const ShowsSliderContent = styled.div`
     overflow: hidden;
     overflow-x: scroll;
     overflow-y: hidden;
     width: 100%;
`;

export const LabelWithTumbs = styled.div`
     margin: 0;
     padding: 0;
     position: relative;
     line-height: 1.4em;
     display: flex;
     overflow-x: auto;
     -webkit-overflow-scrolling: touch;
     scroll-snap-type: x mandatory;
`;

type ColorProp = {
     color?: string;
};

export const FavoriteButton = styled.button<ColorProp>`
     background-color: #${(props) => props.color};
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


