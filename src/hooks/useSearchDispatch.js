import {
  useContext,
  createContext
} from 'react';

export const searchDispatchContext = createContext(() => void(0));

export default function useSearchDispatch() {
  return useContext(searchDispatchContext);
}