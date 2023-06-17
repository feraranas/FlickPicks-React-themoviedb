import React from "react";
import {SearchProps} from "./types";
import {
     MainContainer,
     Input
} from "./styles";

const Searchbar: React.FC<SearchProps> = ({
     setInputValue,
     value
}) => {
  return (
     <MainContainer>
          <Input
               type="text"
               placeholder="Search"
               onChange={(e) => {
                    const inputValue = e.target.value;
                    setInputValue(inputValue);
               }}
               value={value}
          />
     </MainContainer>
  )
};

export default Searchbar;
