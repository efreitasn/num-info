import React, { useReducer } from 'react';
import { dispatchContext } from '../../hooks/useDispatch';
import MainContentForm from './Form';
import MainContentInfoBox from './InfoBox';
import MainContentMessage from './Message';
import MainContentLoading from './Loading';
import './styles.css';

const initialState = {
  triviaInfo: null,
  mathInfo: null,
  yearInfo: null,
  hasError: false,
  loading: false,
  notFound: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...initialState,
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
  }, dispatch] = useReducer(reducer, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <main>
        <MainContentForm />
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
    </dispatchContext.Provider>
  );
}