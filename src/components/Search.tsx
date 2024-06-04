import React, { useState } from 'react';
import './Search.css';
import {SearchIcon} from "./.micro/SearchIcon";

const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        if (query.length > 250) return;
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch('http://localhost:8000/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });
            const data = await response.json();
            setResult(JSON.stringify(data));
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
                <div className="container">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder=" "
                        maxLength={250}
                        className="input"
                        required
                    />
                    <label className="label">Search</label>
                </div>
                <button type="submit" className="search-button">
                    <SearchIcon></SearchIcon>
                </button>
            </form>
            {loading && <div className="loading">Loading...</div>}
            {result && <div className="search-result">{result}</div>}
        </div>
    );
};

export default Search;
