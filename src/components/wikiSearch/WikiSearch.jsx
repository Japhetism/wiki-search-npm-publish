import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QueryCard }  from '../card/Card.stories';
import { SearchInput } from '../search/Search.stories';
import { Error } from '../error/Error';
import { CustomLoader } from '../loader/Loader.stories';
import './wikiSearch.css';

/**
 * UI component for wiki search
 */
export const WikiSearch = ({ placeholder, pageSize, ...props }) => {
  const [query, setQuery] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const makeApiCalls = (event) => {
    setError("");
    if (event.key === 'Enter' && query !== "") {
      setIsLoading(true);
      const url = `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${query}&limit=${pageSize > 100 ? 100 : pageSize}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setSearchResponse(data.pages)
          if (!data.pages || data.pages.length === 0) {
            setError(`No search found for ${query}`);
          }
        })
        .catch(error => {
          setError("An error occurred. please try again.");
        });
    }
    setIsLoading(false);
  }

  return (
    <div className="storybook-container">
      {error ? (
        <div className="storybook-error"><Error text={error} /></div>
      ) : null}
      
      {isLoading ? (
        <div className="storybook-loder-container"><CustomLoader /></div>
      ) : null}
       
      {Array.isArray(searchResponse) ? (
        <>
          {searchResponse.map((response) => (
            <QueryCard key={response.id} {...response} />
          ))}
        </>
      ) : null}

      <SearchInput  
        placeholder={placeholder}
        onChange={setQuery}
        onKeyUp={makeApiCalls}
      />
    </div>  
  );
};

WikiSearch.propTypes = {
  /**
   * number of entries to fetch
   * from the url
  */
  pageSize: PropTypes.number,
  /**
   * Placeholder for wiki search
   */
  placeholder: PropTypes.string,
};

WikiSearch.defaultProps = {
  
};
