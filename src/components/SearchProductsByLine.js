import React from 'react'
import Search from '../components/Search'

const SearchProductsByLine = ({typesBusiness,searchPress,setSearch}) => {
    return (
        <div className="Menu-Category_pm">
            <div>
                <Search typesBusiness={typesBusiness} searchPress={searchPress} setSearch={setSearch}  />
            </div>
        </div>
    );
}

export default SearchProductsByLine;