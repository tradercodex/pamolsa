import React, { Fragment } from 'react'

const NewsPaper = ({ name, created, img }) => {
    return (
        <Fragment>
            <div className="gallery-items">
                <div>
                    <span>{created}</span>
                    <p>{name}</p>
                    <img src={`http://` + img} width="300px" height="300px" alt={name} />
                </div>
            </div>
        </Fragment>
    );
}

export default NewsPaper;