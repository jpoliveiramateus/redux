import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./store/reducer";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
