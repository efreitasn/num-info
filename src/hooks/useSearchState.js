import {
  useContext,
  createContext
} from 'react';

export const initialSearchState = {
  currentValue: '',
  focusInput: false,
  recentSearches: []
};

export const searchStateContext = createContext(initialSearchState);

export default function useSearchState() {
  return useContext(searchStateContext);
}