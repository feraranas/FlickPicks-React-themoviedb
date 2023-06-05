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
     padding: 10px;
     position: relative;
`;

export const ShowContainer = styled.div`
     width: 100%;
     padding-right: 15px;
     padding-left: 15px;
     margin-right: auto;
     margin-left: auto;
`;

export const ShowRow = styled.div`
     display: flex;
     @media (min-width: 768px) {
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
     }
`;

type ColProps = {
     size?: number;
};

export const Col = styled.div<ColProps>`
     flex: ${(props) => props.size};
`;

export const ShowBox = styled.div`
  background: #fff;
  margin: 0;
  height: auto;
  float: left;
  overflow: hidden;
  display: block;
  margin-bottom: 30px;
  margin-right: 20px;
  position: relative;
  box-shadow: 4px 4px 5px rgb(0 0 0 / 22%);
  border-radius: 7px;
  padding: 0;
  flex-shrink: 0;
  scroll-behavior: smooth;
`;

export const ImageContainer = styled.div`
  margin-left: 0;
  min-width: 100%;
  overflow: hidden;
  background: #2f3238;
  float: none;
  transition: opacity 0.35s, transform 0.35s;
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
  max-width: none;
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


