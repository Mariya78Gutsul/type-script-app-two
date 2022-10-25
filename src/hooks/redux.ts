import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../stor/index";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
