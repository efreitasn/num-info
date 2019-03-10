import {
  useContext,
  createContext
} from 'react';

export const initialMainState = {
  triviaInfo: null,
  mathInfo: null,
  yearInfo: null,
  hasError: false,
  loading: false,
  notFound: false
};

export const mainStateContext = createContext(initialMainState);

export default function useMainState() {
  return useContext(mainStateContext);
}