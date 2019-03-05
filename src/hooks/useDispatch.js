import {
  useContext,
  createContext
} from 'react';

export const dispatchContext = createContext(() => void(0));

export default function useDispatch() {
  return useContext(dispatchContext);
}