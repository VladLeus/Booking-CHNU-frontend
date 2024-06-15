import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@store/index.ts';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
