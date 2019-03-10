import React from 'react';
import MainContentSection from '../../Section';
import useGetNumberInfo from '../../../../hooks/useGetNumberInfo';
import useSearchState from '../../../../hooks/useSearchState';
import './styles.css';

export default function MainContentSearchRecent() {
  const getNumberInfo = useGetNumberInfo();
  const { recentSearches } = useSearchState();

  return recentSearches.length === 0 ? null : (
    <MainContentSection noShadow>
      <div className="main-content-search-recent">
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
    </MainContentSection>
  );
}