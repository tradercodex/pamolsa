import React from 'react'
import i18n from "i18next";

const SidebarProductsByLine = ({
    lines,
    types,
    materials,
    toggleTypesProductsRadio,
    toggleMaterialsProductsRadio,
    toggleLinesProductsRadio,
    t
}) => {

    return (
        <div className="Materials-sidebar_pm">
            <div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>{t('productos.lineas_productos')}</h5>
                </div>
                <div className="line">
                    {
                        lines && lines.length > 0 ?
                            lines.map(item => (
                                <div key={item.id} className="material">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <label className="con1" htmlFor=""><span>{item.name}</span>
                                            <input id="radio" className="only-one" name="business" value={item.id} onClick={(e) => toggleLinesProductsRadio(e, item.id)} style={{ marginRight: "10px" }} type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            )) : ''
                    }
                </div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>{t('productos.tipos_productos')}</h5>
                </div>
                <div className="line">
                    {
                        types && types.length > 0 ?
                            types.map(item => (
                                <div key={item.id} className="material">
                                    <label className="con1" htmlFor=""><span>{i18n.language === 'es' ? item.name : item.name_en}</span>
                                        <input className="only-one" name="line" value={item.id} onClick={(e) => toggleTypesProductsRadio(e, item.id)} style={{ marginRight: "10px" }} type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            )) : ''
                    }
                </div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>{t('productos.material')}</h5>
                </div>
                <div>
                    {
                        materials && materials ?
                            materials.map(material => (
                                <div key={material.id} className="material">
                                    <label className="con1" htmlFor=""><span>{i18n.language === 'es' ? material.name : material.name_en}</span>
                                        <input className="only-one" name="id" value={material.id} style={{ marginRight: "10px" }} type="checkbox" onClick={(e) => toggleMaterialsProductsRadio(e, material.id)} />
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

export default SidebarProductsByLine;