import React, { Fragment } from 'react'

const New = ({ title, created, img }) => {
    return (
        <Fragment>
            <div className="gallery-items">
                <div>
                    <span>{created}</span>
                    <p>{title}</p>
                    <img src={`http://` + img} width="300px" height="300px" alt={title} />
                </div>
            </div>
        </Fragment>
    );
}

export default New;