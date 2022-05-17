import React, { Fragment } from 'react'
import Arrow from '../images/svg/arrowback';
import { useHistory } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import i18n from "i18next";

const DetailNew = ({ title, title_en, body, source, created, file, t }) => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <div className="Detail-new_pm">
                <img src={require('../images/img/bannerus.webp')} alt="news" />
                <div className="back">
                    <button onClick={back}><Arrow />{t('volver')}</button>
                </div>
            </div>
            <div className="container-detail_new">
                <div>
                    <h2>{i18n.language === 'es' ? title : title_en}</h2>
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