import React, { Fragment } from 'react'
import Arrow from '../images/svg/arrowback';
import { Link, useHistory } from 'react-router-dom'

const DetailNew = ({title,body,source,created,place,file,author}) => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    console.log(file)

    return (
        <Fragment>
            <div className="Detail-new_pm">
                <img src={`http://`+ file} />
                <div className="back">
                    <button onClick={back}><Arrow />Volver</button>
                </div>
            </div>
            <div className="container-detail_new">
                <div>
                    <h2>{title}</h2>
                    <div className="info-detail">
                     <span>{place} / {created}</span>
                     <div className="Font text">
                            <div>Author : {author}</div>
                            
                    </div>
                        <p className="text">{body}</p>
                        <div className="Font text">
                            <div>Fuente</div>
                            <Link to="#">{source}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DetailNew;