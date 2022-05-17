import React from 'react'
import Search from '../components/Search'

const SearchProductsByLine = ({ search, onTextChanged, renderSuggestions, typesBusiness, searchPress, setSearch, t }) => {
    return (
        <div className="Menu-Category_pm">
            <div>
                <Search search={search} onTextChanged={onTextChanged} renderSuggestions={renderSuggestions} typesBusiness={typesBusiness} searchPress={searchPress} setSearch={setSearch} t={t} />
            </div>
        </div>
    );
}

export default SearchProductsByLine;