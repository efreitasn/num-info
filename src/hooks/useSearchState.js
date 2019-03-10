import {
  useContext,
  createContext
} from 'react';

export const initialSearchState = {
  currentValue: '',
  recentSearches: []
};

export const searchStateContext = createContext(initialSearchState);

export default function useSearchState() {
  return useContext(searchStateContext);
}