import React, {useState} from 'react'

const SearchForm = ({ onsearch }) => {
    const [query, setQuery] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if(query){
            onsearch(query);
            setQuery('');
        }
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter Github Username:" value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm