import React, { Fragment } from 'react'
import Delete from '@material-ui/icons/Delete';

const Banner = ({ id,img,deletingBanner }) => {

    return (
        <Fragment>
            <div className="gallery-items" key={id}>
                <div>
                    <img src={`http://` + img} width="300px" height="300px" alt="imagen" />
                    <button onClick={() => deletingBanner(id)} className="delete"><Delete /></button>
                </div>
            </div>
        </Fragment>
    );
}

export default Banner;