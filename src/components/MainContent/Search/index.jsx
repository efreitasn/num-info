import React, {
  useReducer,
  useEffect
} from 'react';
import MainContentSearchForm from './Form';
import MainContentSearchRecent from './Recent';
import { searchDispatchContext } from '../../../hooks/useSearchDispatch';
import {
  searchStateContext,
  initialSearchState
} from '../../../hooks/useSearchState';

function getRecentSearches(recentSearches, currentValue) {
  if (recentSearches[recentSearches.length - 1] !== currentValue) {
    const newRecentSearches = [
      ...recentSearches,
      currentValue
    ].filter((e, i, arr) => arr.lastIndexOf(e) === i);

    if (newRecentSearches.length === 6) {
      newRecentSearches.shift();
    }

    return newRecentSearches;
  }

  return recentSearches;
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_VALUE':
      const recentSearches = getRecentSearches(
        state.recentSearches,
        Number(action.currentValue)
      );

      return {
        ...state,
        currentValue: action.currentValue,
        recentSearches
      };
    case 'SET_RECENT_SEARCHES':
      return {
        ...state,
        recentSearches: action.recentSearches
      };
    default:
      return state;
  }
}

export default function MainContentSearch() {
  const [state, dispatch] = useReducer(reducer, initialSearchState);

  useEffect(
    () => {
      const recentSearches = JSON.parse(localStorage.getItem('recent_searches'));

      if (recentSearches) {
        dispatch({
          type: 'SET_RECENT_SEARCHES',
          recentSearches
        });
      }
    },
    []
  );

  useEffect(
    () => {
      localStorage.setItem('recent_searches', JSON.stringify(state.recentSearches));
    },
    [state.recentSearches]
  );

  return (
    <searchDispatchContext.Provider value={dispatch}>
      <searchStateContext.Provider value={state}>
        <MainContentSearchForm />
        <MainContentSearchRecent />
      </searchStateContext.Provider>
    </searchDispatchContext.Provider>
  );
};