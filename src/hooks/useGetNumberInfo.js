import { useCallback } from 'react';
import { getNumberInfoAllTypes } from '../api';
import useMainDispatch from './useMainDispatch';
import useSearchDispatch from './useSearchDispatch';

export default function useGetNumberInfo() {
  const mainDispatch = useMainDispatch();
  const searchDispatch = useSearchDispatch();
  const getNumberInfo = useCallback(
    async currentValue => {
      if (currentValue !== '') {
        mainDispatch({
          type: 'START_LOADING'
        });
  
        searchDispatch({
          type: 'SET_CURRENT_VALUE',
          currentValue
        });
  
        try {
          const [
            triviaInfo,
            yearInfo,
            mathInfo
          ] = await getNumberInfoAllTypes(currentValue);
  
          mainDispatch({
            type: 'SET_INFO',
            triviaInfo: triviaInfo.found ? triviaInfo.text : null,
            yearInfo: yearInfo.found ? yearInfo.text : null,
            mathInfo: mathInfo.found ? mathInfo.text : null
          });
        } catch (e) {
          mainDispatch({
            type: 'HAS_ERROR'
          });
        }
      }
    },
    []
  );

  return getNumberInfo;
}