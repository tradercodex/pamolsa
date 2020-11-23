import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import Arrow from '../images/svg/arrowback'

const DetailCommunity = ({ title, description, file }) => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <div className="Detail-new_pm">
                <img src={`http://` + file} />
                <div className="back">
                    <button onClick={back}><Arrow />Volver</button>
                </div>
            </div>
            <div className="container-detail_new">
                <div>
                    <h2>{title}</h2>
                    <div className="info-detail" style={{paddingTop: "0px"}}>
                        <p className="text">{ReactHtmlParser(description)}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DetailCommunity;