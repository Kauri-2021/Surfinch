import React from 'react';

const SearchBar = ({ handleSearchBarChange }) => {
  return (
    <form className="mb-3">
      <div className="form-group row">
        <div className="col-10">
          <input className="form-control" type="text" placeholder="Search by bird name or location..." onChange={handleSearchBarChange} />
        </div>
        <div className="col-2">
          <input type="submit" className="btn form-control" value="&#128269;" />
        </div>
      </div>
    </form>
  )
}

export default SearchBar;