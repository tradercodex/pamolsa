import React, { Fragment } from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate, totalPostsFilter }) => {

    const pageNumbers = [];
    const pageNumbersByFilter = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    for (let i = 1; i <= Math.ceil(totalPostsFilter / postsPerPage); i++) {
        pageNumbersByFilter.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbersByFilter && pageNumbersByFilter.length > 0 ?
                        pageNumbersByFilter.map(number => (
                            <li key={number} className="page-item">
                                <a id="paginate" onClick={() => paginate(number)} className="page-link">
                                    {number}
                                </a>
                            </li>
                        )) :
                        <Fragment>
                            {
                                pageNumbers.map(number => (
                                    <li key={number} className="page-item">
                                        <a id="paginate" onClick={() => paginate(number)} className="page-link">
                                            {number}
                                        </a>
                                    </li>
                                ))
                            }
                        </Fragment>
                }
            </ul>
        </div>
    );
}

export default Pagination;