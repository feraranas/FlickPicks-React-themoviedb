import styled from "styled-components";

export const App = styled.div`
     box-sizing: border-box;
`;

export const HomeWrapper = styled.div`
     background-color: #f3f3f3;
     float: left;
     width: 100%;
     padding: 0;
     margin: auto;
     margin-bottom: 10px;
     overflow: hidden;
     padding-left: 15px;
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

export const ViewAll = styled.div`
     overflow: hidden;
     position: absolute;
     top: 15px;
     right: 15px;
     font-size: 12px;
     box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
     transition: all 0.4s ease-in-out;
`;


export const ViewAlla = styled(ViewAll)`
     font-family: monospace;
     border: 1px solid #ff4444;
     color: ffffff;
     padding: 8px 15px;
     display: -webkit-box;
     font-weight: 600;
     border-radius: 4px;
     overflow: hidden;
     background: ff4444;
`;




