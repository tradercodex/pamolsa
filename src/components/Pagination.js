import React from 'react'

const Pagination = ({ postsPerPage, paginate, totalPostsFilter, totalFilter }) => {

    const pageNumbers = [];
    const pageNumbersByFilter = [];

    for (let i = 1; i <= Math.ceil(totalFilter / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    for (let i = 1; i <= Math.ceil(totalPostsFilter / postsPerPage); i++) {
        pageNumbersByFilter.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbersByFilter.map(number => (
                            <li key={number} className="page-item">
                                <a id="paginate" onClick={() => paginate(number)} className="page-link">
                                    {number}
                                </a>
                            </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination;