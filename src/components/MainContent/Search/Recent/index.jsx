import React from 'react';
import MainContentSection from '../../Section';
import ClearIcon from '../../../icons/Clear';
import useGetNumberInfo from '../../../../hooks/useGetNumberInfo';
import useSearchState from '../../../../hooks/useSearchState';
import './styles.css';

export default function MainContentSearchRecent({ clearRecentSearches }) {
  const getNumberInfo = useGetNumberInfo();
  const { recentSearches } = useSearchState();

  return recentSearches.length === 0 ? null : (
    <MainContentSection noShadow>
      <div className="main-content-search-recent">
        <div className="main-content-search-recent__left">
          <h2 className="main-content-search-recent__title">Recent searches</h2>
          <div className="main-content-search-recent__items">
            {[...recentSearches]
              .reverse()
              .map(number => (
                <button
                  key={number}
                  className="main-content-search-recent__item"
                  onClick={() => getNumberInfo(number)}
                >{number}</button>
              ))
            }
          </div>
        </div>
        <div className="main-content-search-recent__right">
          <button
            className="main-content-search-recent-clear"
            onClick={clearRecentSearches}
            title="Clear recent searches"
          >
            <ClearIcon
              className="main-content-search-recent-clear__icon"
              title="Clear recent searches"
            />
          </button>
        </div>
      </div>
    </MainContentSection>
  );
}