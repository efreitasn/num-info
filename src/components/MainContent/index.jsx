import React, { useReducer } from 'react';
import { mainDispatchContext } from '../../hooks/useMainDispatch';
import { initialMainState } from '../../hooks/useMainState';
import MainContentSearch from './Search';
import MainContentInfoBox from './InfoBox';
import MainContentMessage from './Message';
import MainContentLoading from './Loading';
import './styles.css';

function reducer(state, action) {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...initialMainState,
        loading: true
      };
    case 'SET_INFO':
      return {
        ...state,
        triviaInfo: action.triviaInfo,
        yearInfo: action.yearInfo,
        mathInfo: action.mathInfo,
        notFound: !action.triviaInfo && !action.yearInfo && !action.mathInfo,
        loading: false
      };
    case 'HAS_ERROR':
      return {
        ...state,
        hasError: true,
        loading: false
      };
    default:
      return state;
  }
}

export default function MainContent() {
  const [{
    triviaInfo,
    yearInfo,
    mathInfo,
    loading,
    notFound,
    hasError
  }, dispatch] = useReducer(reducer, initialMainState);

  return (
    <mainDispatchContext.Provider value={dispatch}>
      <main>
        <MainContentSearch />
        {loading && (
          <MainContentLoading />
        )}
        {hasError && (
          <MainContentMessage
            type="error"
          />
        )}
        {notFound && (
          <MainContentMessage
            type="not-found"
          />
        )}
        {triviaInfo && (
          <MainContentInfoBox
            type="trivia"
            description={triviaInfo}
          />
        )}
        {yearInfo && (
          <MainContentInfoBox
            type="year"
            description={yearInfo}
          />
        )}
        {mathInfo && (
          <MainContentInfoBox
            type="math"
            description={mathInfo}
          />
        )}
      </main>
    </mainDispatchContext.Provider>
  );
}