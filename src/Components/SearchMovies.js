import React,{Fragment} from 'react';


const SearchMovies = () => {
    return (
        <form className="form">
            <label htmlFor="query">Enter Movie Name</label>
            <input type="text" name="query" className="form-control" placeholder="i.e. Tenet"></input>
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default SearchMovies
