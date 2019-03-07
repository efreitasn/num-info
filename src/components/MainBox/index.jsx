import React, { useReducer } from 'react';
import './styles.css';
import MainBoxHeader from '../MainBoxHeader';
import { dispatchContext } from '../../hooks/useDispatch';
import InfoSection from '../InfoSection';
import MainBoxSection from '../MainBoxSection';
import SpinnerIcon from '../SpinnerIcon';

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
      <div>
        <MainBoxHeader />
        {isCleared && (
          <div>type something to see ya</div>
        )}
        {loading && (
          <div className="spinner-icon-wrapper">
            <SpinnerIcon />
          </div>
        )}
        {!loading && !isCleared && !triviaInfo && !yearInfo && !mathInfo && (
          <p>That's a very awkward number.</p>
        )}
        {triviaInfo && (
          <MainBoxSection>
            <InfoSection
              title="Trivia"
              type="trivia"
              description={triviaInfo}
            />
          </MainBoxSection>
        )}
        {yearInfo && (
          <MainBoxSection>
            <InfoSection
              title="Year"
              type="year"
              description={yearInfo}
            />
          </MainBoxSection>
        )}
        {mathInfo && (
          <MainBoxSection>
            <InfoSection
              title="Math"
              type="math"
              description={mathInfo}
            />
          </MainBoxSection>
        )}
      </div>
    </dispatchContext.Provider>
  );
}