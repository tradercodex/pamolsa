import React from 'react';
import { withRouter } from 'react-router-dom'
import i18n from "i18next";

const SidebarProducts = ({
    lines,
    business,
    materials,
    toggleMaterialsProductsRadio,
    toggleChangeCheckbox,
    toggleLineProductsRadio,
    t
}) => {

    return (
        <div className="Materials-sidebar_pm">
            <div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>{t('productos.tipos_lineas')}</h5>
                </div>
                <div className="line">
                    {
                        lines && lines.length > 0 ?
                            lines.map(item => (
                                <div key={item.id} className="material">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <label className="con1" htmlFor=""><span>{item.name}</span>
                                            <input id="radio" className="only-one" name="business" value={item.id} onClick={(e) => toggleLineProductsRadio(e, item.id)} style={{ marginRight: "10px" }} type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            )) : ''
                    }
                </div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>{t('productos.tipos_negocios')}</h5>
                </div>
                <div className="line">
                    {
                        business && business.length > 0 ?
                            business.map(item => (
                                <div key={item.id} className="material">
                                    <label className="con1" htmlFor=""><span>{i18n.language === 'es' ? item.name : item.name_en}</span>
                                        <input name="business" style={{ marginRight: "10px" }} onClick={(e) => toggleChangeCheckbox(e, item.id)} type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            )) : ''
                    }
                </div>
                <div>
                    <div style={{ padding: "0px 10px 10px 10px" }}>
                        <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>{t('productos.material')}</h5>
                    </div>
                    {
                        materials && materials ?
                            materials.map(material => (
                                <div key={material.id} className="material">
                                    <label className="con1" htmlFor=""><span>{material.name}</span>
                                        <input className="only-one" name="line" value={material.id} onClick={(e) => toggleMaterialsProductsRadio(e, material.id)} style={{ marginRight: "10px" }} type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            )) : ''
                    }
                </div>
            </div>
        </div>
    );
}

export default withRouter(SidebarProducts);