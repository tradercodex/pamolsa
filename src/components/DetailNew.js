import React, { Fragment } from 'react'
import Arrow from '../images/svg/arrowback';
import { useHistory } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

const DetailNew = ({title,body,source,created,file}) => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

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
                     <span>Lima - {created}</span>
                        <p className="text">{ReactHtmlParser(body)}</p>
                        <div className="Font text">
                            <a href={source} target="_blank">{source}</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DetailNew;