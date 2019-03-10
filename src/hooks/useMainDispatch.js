import {
  useContext,
  createContext
} from 'react';

export const mainDispatchContext = createContext(() => void(0));

export default function useMainDispatch() {
  return useContext(mainDispatchContext);
}