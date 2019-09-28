import React from 'react';
import './Pagination.css';

const Pagination = ({ page, totalPages, handlePaginationClick }) => {
    return (
        <div className="Pagination">
            <button className="Pagination-button" disabled={page === 1} onClick={() => handlePaginationClick('prev')}>
                &larr;
            </button>
                <span className="Pagination-info">
                    Page <b> {page} </b> of <b> {totalPages} </b>
                </span>
            <button className="Pagination-button" disabled={page === totalPages} onClick={() => handlePaginationClick('next')}>
                &rarr;
            </button>
        </div>
    );
};

export default Pagination;