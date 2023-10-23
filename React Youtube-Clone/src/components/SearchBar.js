import React from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
    }
    return (
        <div>
            <form className="d-flex searchwidth" role="search" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input className="form-control searchBar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className="btn btn-outline-light searchBtn" type="submit"><i class="bi bi-search"></i></button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar