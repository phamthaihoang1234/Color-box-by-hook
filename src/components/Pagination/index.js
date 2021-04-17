import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    const {pagination, onPageChange} = props;
    const {_page , _limit, _totalRows} = pagination;
    if(onPageChange) {
        onPageChange(newPage);
    }
    return (
        <div>
            <button
                disabled={}
                onClick={}
            >

            </button>
            
        </div>
    );
}

export default Pagination;