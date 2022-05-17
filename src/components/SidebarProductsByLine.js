import React from 'react'
import i18n from "i18next";

const SidebarProductsByLine = ({
    business,
    types,
    materials,
    toggleTypesProductsRadio,
    toggleMaterialsProductsRadio,
    toggleChangeCheckbox,
    t
}) => {

    return (
        <div className="Materials-sidebar_pm">
            <div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>{t('productos.tipos_productos')}</h5>
                </div>
                <div className="line">
                    {
                        types && types.length > 0 ?
                            types.map(item => (
                                <div key={item.id} className="material">
                                    <label className="con1" htmlFor=""><span>{i18n.language === 'es' ? item.name : item.name_en}</span>
                                        <input id="checkbox" className="only-one" name="type" value={item.id} onClick={(e) => toggleTypesProductsRadio(e, item.id)} style={{ marginRight: "10px" }} type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
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
                                        <input id="checkbox" className="only-one" name="material" value={material.id} onClick={(e) => toggleMaterialsProductsRadio(e, material.id)} style={{ marginRight: "10px" }} type="checkbox" />
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