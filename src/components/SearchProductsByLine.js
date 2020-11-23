import React from 'react'
import Search from '../components/Search'

const SearchProductsByLine = ({typesBusiness}) => {
    return (
        <div className="Menu-Category_pm">
            <div>
                <Search typesBusiness={typesBusiness} />
            </div>
        </div>
    );
}

export default SearchProductsByLine;