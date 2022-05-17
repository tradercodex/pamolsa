import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import Arrow from '../images/svg/arrowback'
import i18n from "i18next";

const DetailCommunity = ({ title, title_en, description, description_en, file, t }) => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <div className="Detail-new_pm">
                <img src={`https://` + file} alt="community" />
                <div className="back">
                    <button onClick={back}><Arrow />{t('volver')}</button>
                </div>
            </div>
            <div className="container-detail_new">
                <div>
                    <h2>{i18n.language === 'es' ? title : title_en}</h2>
                    <div className="info-detail" style={{ paddingTop: "0px" }}>
                        <p className="text">{ReactHtmlParser(i18n.language === 'es' ? description : description_en)}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DetailCommunity;