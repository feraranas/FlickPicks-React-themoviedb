import { Dispatch, SetStateAction } from "react";

export interface SearchProps {
     setInputValue: Dispatch<SetStateAction<string>>;
     value: string;
}