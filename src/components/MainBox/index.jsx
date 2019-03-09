import React, { useReducer } from 'react';
import './styles.css';
import MainBoxHeader from '../MainBoxHeader';
import { dispatchContext } from '../../hooks/useDispatch';
import InfoSection from '../InfoSection';
import MainBoxSection from '../MainBoxSection';
import SpinnerIcon from '../SpinnerIcon';

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
    case 'SET_HAS_ERROR':
      return {
        ...state,
        hasError: action.hasError
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
    case 'START_LOADING':
      return {
        ...initialState,
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
    notFound,
    hasError
  }, dispatch] = useReducer(reducer, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <div>
        <MainBoxHeader />
        {hasError && (
          <div className="main-box-center-wrapper">
            <p className="main-box-error-message">
              An error happened while trying to get the info.
            </p>
          </div>
        )}
        {loading && (
          <div className="main-box-center-wrapper">
            <SpinnerIcon />
          </div>
        )}
        {notFound && (
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