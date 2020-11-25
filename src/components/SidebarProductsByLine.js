import React from 'react'

const SidebarProductsByLine = ({
    business,
    types,
    materials,
    toggleTypesProductsRadio,
    toggleMaterialsProductsRadio,
    toggleChangeCheckbox
}) => {

    return (
        <div className="Materials-sidebar_pm">
            <div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Tipos de productos</h5>
                </div>
                <div>
                    {
                        types && types.length > 0 ?
                            types.map(item => (
                                <div key={item.id} className="material">
                                    <label className="con1" htmlFor=""><span>{item.name}</span>
                                        <input id="checkbox" className="only-one" name="type" value={item.id} onClick={(e) => toggleTypesProductsRadio(e, item.id)} style={{ marginRight: "10px" }} type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            )) : ''
                    }
                </div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Tipo de negocio</h5>
                </div>
                <div>
                    {
                        business && business.length > 0 ?
                            business.map(item => (
                                <div key={item.id} className="material">
                                    <label className="con1" htmlFor=""><span>{item.name}</span>
                                        <input name="business" style={{ marginRight: "10px" }} onClick={(e) => toggleChangeCheckbox(e, item.id)} type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            )) : ''
                    }
                    <div style={{ padding: "0px 10px 10px 10px" }}>
                        <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Material</h5>
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