import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from "./store/store";
import { RootState } from "./store/reducer";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
