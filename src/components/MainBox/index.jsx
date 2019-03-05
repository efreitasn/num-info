import React, { useReducer } from 'react';
import './styles.css';
import MainBoxHeader from '../MainBoxHeader';
import { dispatchContext } from '../../hooks/useDispatch';
import InfoSection from '../InfoSection';

const initialState = {
  error: null,
  triviaInfo: null,
  mathInfo: null,
  yearInfo: null,
  loading: false,
  isCleared: true
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error
      };
    case 'SET_INFO':
      return {
        ...state,
        triviaInfo: action.triviaInfo,
        yearInfo: action.yearInfo,
        mathInfo: action.mathInfo,
        loading: false
      };
    case 'START_LOADING':
      return {
        ...initialState,
        isCleared: false,
        loading: true
      };
    case 'SET_TO_DEFAULT':
      return initialState;
    default:
      return state;
  }
}

export default function MainBox() {
  const [{
    triviaInfo,
    yearInfo,
    mathInfo,
    loading,
    isCleared
  }, dispatch] = useReducer(reducer, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <MainBoxHeader />
      <div className="main-box">
        <div className="main-box__content">
          {isCleared && (
            <div>type something to see ya</div>
          )}
          {loading && (
            <p>Loading</p>
          )}
          {!loading && !isCleared && !triviaInfo && !yearInfo && !mathInfo && (
            <p>That's a very awkward number.</p>
          )}
          {triviaInfo && (
            <InfoSection
              title="Trivia"
              type="trivia"
              description={triviaInfo}
            />
          )}
          {yearInfo && (
            <InfoSection
              title="Year"
              type="year"
              description={yearInfo}
            />
          )}
          {mathInfo && (
            <InfoSection
              title="Math"
              type="math"
              description={mathInfo}
            />
          )}
        </div>
      </div>
    </dispatchContext.Provider>
  );
}