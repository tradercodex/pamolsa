import React, { Fragment } from 'react'

const Banner = ({ key,img }) => {
    return (
        <Fragment>
            <div className="gallery-items" key={key}>
                <div>
                    <img src={`http://` + img} width="300px" height="300px" alt="imagen" />
                </div>
            </div>
        </Fragment>
    );
}

export default Banner;